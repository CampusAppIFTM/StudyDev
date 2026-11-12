import { API_CONFIG } from "./config";
import { languages, roadmaps } from "../data/studyDevData";
import { paginatedResponse, errorResponse, toCourseResponse, toLessonResponse } from "./dtos";

// Simula latência de rede e estrutura de API real sobre dados locais + Firestore
function delay(ms = 120) {
  return new Promise((r) => setTimeout(r, ms));
}

function paginate(array, page = 1, limit = API_CONFIG.pagination.defaultLimit) {
  const l = Math.min(Math.max(limit, 1), API_CONFIG.pagination.maxLimit);
  const p = Math.max(page, 1);
  const start = (p - 1) * l;
  return { slice: array.slice(start, start + l), total: array.length, page: p, limit: l };
}

function filterBySearch(array, search, fields = ["name", "desc"]) {
  if (!search) return array;
  const t = search.toLowerCase();
  return array.filter((item) => fields.some((f) => String(item[f] || "").toLowerCase().includes(t)));
}

export const api = {
  // Health
  async health() {
    await delay(40);
    return { success: true, data: { status: "ok", service: "studydev-api", version: API_CONFIG.version } };
  },

  // Courses = languages
  async getCourses({ page = 1, limit = 20, search, category, level } = {}) {
    await delay();
    let data = [...languages];
    if (category && category !== "Todos") data = data.filter((c) => String(c.category || "Programação").toLowerCase() === category.toLowerCase());
    if (level) data = data.filter((c) => String(c.level || "").toLowerCase() === level.toLowerCase());
    data = filterBySearch(data, search, ["name", "desc"]);
    const { slice, total, page: p, limit: l } = paginate(data, page, limit);
    return paginatedResponse(slice.map(toCourseResponse), p, l, total);
  },

  async getCourseById(id) {
    await delay(60);
    const found = languages.find((c) => c.id === id);
    if (!found) return errorResponse("RESOURCE_NOT_FOUND", "Curso não encontrado.", 404);
    return { success: true, data: toCourseResponse(found) };
  },

  // Lessons = roadmaps.content
  async getLessons(courseId, { page = 1, limit = 20 } = {}) {
    await delay();
    const track = roadmaps.find((r) => r.id === courseId);
    if (!track) return errorResponse("RESOURCE_NOT_FOUND", "Trilha não encontrada.", 404);
    const lessons = (track.content || []).filter((c) => c.type === "video").map((l, i) => toLessonResponse(l, i));
    const { slice, total, page: p, limit: l } = paginate(lessons, page, limit);
    return paginatedResponse(slice, p, l, total);
  },

  // Tracks
  async getTracks({ page = 1, limit = 20, search, category } = {}) {
    await delay();
    let data = [...roadmaps];
    if (category) data = data.filter((t) => (t.category || "Geral").toLowerCase().includes(category.toLowerCase()));
    data = filterBySearch(data, search, ["name", "desc"]);
    const { slice, total, page: p, limit: l } = paginate(data, page, limit);
    return paginatedResponse(slice, p, l, total);
  },

  // Progress já existe em services/progresso, aqui expomos via API
  async getProgress(userId, trackId) {
    await delay(40);
    // delega para service real (firestore) via import dinâmico para evitar ciclo
    const { obterProgresso } = await import("../services/progresso");
    const data = await obterProgresso(userId, trackId);
    return { success: true, data };
  },
};
