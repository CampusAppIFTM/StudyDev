// Compatibilidade: mantém os exports antigos (linguagens, trilhas, recursos)
// mas agora alimentados pelo dataset completo (studyDevData.js) sem quebrar imports existentes.
// Fonte única da verdade: ./studyDevData.js

import {
  languages,
  roadmaps,
  aboutDetails,
  partners,
  StudyDevData,
} from "./studyDevData.js";

// Re-exporta dataset completo para telas novas que preferirem importar daqui
export { languages, roadmaps, aboutDetails, partners, StudyDevData };
export { default } from "./studyDevData.js";

// Mapeia languages -> formato legado `linguagens` usado em telas antigas
// Mantém campos novos também (name, ecosystem, etc.) para transição suave
export const linguagens = languages.map((l) => ({
  id: l.id,
  // campos legados
  nome: l.name,
  desc: l.desc,
  ecossistema: l.ecosystem || [],
  paradigmas: Array.isArray(l.paradigms) ? l.paradigms.join(", ") : l.paradigms || "",
  ano: String(l.year ?? ""),
  runtime: l.runtime || "",
  tipagem: l.typing || "",
  criadores: Array.isArray(l.creators) ? l.creators.join(", ") : l.creators || "",
  // campos novos (para telas atualizadas)
  name: l.name,
  ecosystem: l.ecosystem || [],
  paradigms: l.paradigms || [],
  typing: l.typing || "",
  year: l.year,
  creators: l.creators || [],
  docs: l.docs || "",
  site: l.site || "",
  use_cases: l.use_cases || [],
  hello_world: l.hello_world || null,
}));

export const trilhas = roadmaps.map((r) => ({
  id: r.id,
  titulo: r.name,
  descricao: r.desc,
  content: r.content || [],
  name: r.name,
  desc: r.desc,
}));

export const recursos = [
  { id: "mdn", titulo: "MDN Web Docs", url: "https://developer.mozilla.org/pt-BR/" },
  { id: "roadmap", titulo: "roadmap.sh", url: "https://roadmap.sh" },
  { id: "freecodecamp", titulo: "freeCodeCamp", url: "https://www.freecodecamp.org" },
  { id: "exercism", titulo: "Exercism", url: "https://exercism.org" },
  { id: "docs", titulo: "Documentação Oficial", url: "https://devdocs.io" },
  { id: "github", titulo: "GitHub Explore", url: "https://github.com/explore" },
];
