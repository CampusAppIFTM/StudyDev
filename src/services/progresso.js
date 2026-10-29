import AsyncStorage from "@react-native-async-storage/async-storage";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebaseConfig";

// Chave local: progresso_<uid>_<roadmapId>  ou progresso_anon_<roadmapId>
function chaveLocal(uid, roadmapId) {
  const base = uid || "anon";
  return `progresso_${base}_${roadmapId}`;
}
function chaveGeral(uid) {
  return `progresso_geral_${uid || "anon"}`;
}

// Calcula % com base em total de vídeos/links da trilha
export function calcularPorcentagem(total, concluidosCount) {
  if (!total || total === 0) return 0;
  return Math.round((concluidosCount / total) * 100);
}

// Obtém progresso de uma trilha
export async function obterProgresso(uid, roadmapId) {
  const fallback = { concluidos: [], porcentagem: 0, ultimaAtividade: null, proximaAtividade: null };
  // Tenta Firestore se houver uid autenticado
  if (uid) {
    try {
      const ref = doc(db, "usuarios", uid, "progresso", roadmapId);
      const snap = await getDoc(ref);
      if (snap.exists()) {
        const data = snap.data();
        // Merge com local para offline fallback
        return {
          concluidos: data.concluidos || [],
          porcentagem: data.porcentagem || 0,
          ultimaAtividade: data.ultimaAtividade || null,
          proximaAtividade: data.proximaAtividade || null,
          atualizadoEm: data.atualizadoEm,
        };
      }
    } catch (e) {
      console.log("[PROGRESSO] Firestore get falhou, usando local", e?.code);
    }
  }
  // Fallback AsyncStorage
  try {
    const raw = await AsyncStorage.getItem(chaveLocal(uid, roadmapId));
    if (raw) return JSON.parse(raw);
  } catch {}
  return fallback;
}

// Salva progresso de uma trilha
export async function salvarProgresso(uid, roadmapId, dados) {
  const payload = {
    ...dados,
    atualizadoEm: new Date().toISOString(),
  };
  // Sempre salva local
  try {
    await AsyncStorage.setItem(chaveLocal(uid, roadmapId), JSON.stringify(payload));
  } catch {}

  // Se autenticado, salva também no Firestore (não bloqueia)
  if (uid) {
    try {
      const ref = doc(db, "usuarios", uid, "progresso", roadmapId);
      await setDoc(
        ref,
        {
          ...payload,
          atualizadoEm: serverTimestamp(),
        },
        { merge: true }
      );
    } catch (e) {
      console.warn("[PROGRESSO] Firestore save falhou", e?.code);
    }
  }
  return payload;
}

// Alterna conclusão de um conteúdo (video/link) dentro da trilha
export async function alternarConclusao(uid, roadmap, contentId) {
  const roadmapId = roadmap.id;
  const total = (roadmap.content || []).filter((c) => c.type === "video" || c.type === "link").length;
  const progresso = await obterProgresso(uid, roadmapId);
  const concluidos = new Set(progresso.concluidos || []);
  let proxima = null;

  if (concluidos.has(contentId)) {
    concluidos.delete(contentId);
  } else {
    concluidos.add(contentId);
  }

  const lista = Array.from(concluidos);
  const porcentagem = calcularPorcentagem(total, lista.length);

  // Define próxima atividade: primeiro não concluído
  const todosIds = (roadmap.content || [])
    .filter((c) => c.type === "video" || c.type === "link")
    .map((c, idx) => ({ id: c.url || `${c.type}-${idx}`, name: c.name }));
  const proximoItem = todosIds.find((c) => !concluidos.has(c.id));
  proxima = proximoItem ? proximoItem.name : null;

  const ultima = lista.length ? contentId : progresso.ultimaAtividade;

  const novo = {
    concluidos: lista,
    porcentagem,
    ultimaAtividade: ultima,
    proximaAtividade: proxima,
    trilhaId: roadmapId,
    trilhaNome: roadmap.name,
  };

  await salvarProgresso(uid, roadmapId, novo);

  // Atualiza geral
  await atualizarProgressoGeral(uid);

  return novo;
}

// Calcula progresso geral (média das trilhas)
export async function obterProgressoGeral(uid, roadmaps) {
  let totalPct = 0;
  let trilhasIniciadas = 0;
  let ultimaAtividade = null;
  let proximaAtividade = null;
  let trilhaAtual = null;

  for (const r of roadmaps) {
    const p = await obterProgresso(uid, r.id);
    if (p.concluidos && p.concluidos.length > 0) {
      trilhasIniciadas++;
      totalPct += p.porcentagem || 0;
      if (p.ultimaAtividade && !ultimaAtividade) {
        ultimaAtividade = p.ultimaAtividade;
        proximaAtividade = p.proximaAtividade;
        trilhaAtual = r.name;
      }
    }
  }

  const media = trilhasIniciadas ? Math.round(totalPct / trilhasIniciadas) : 0;

  return {
    porcentagemGeral: media,
    trilhasIniciadas,
    totalTrilhas: roadmaps.length,
    ultimaAtividade,
    proximaAtividade,
    trilhaAtual,
  };
}

async function atualizarProgressoGeral(uid) {
  // Placeholder para futuro: poderia salvar doc geral em Firestore
  try {
    await AsyncStorage.setItem(chaveGeral(uid), new Date().toISOString());
  } catch {}
}

// Hook-like helper para uso em componentes (sem ser hook, apenas util)
export async function obterTodosProgressos(uid, roadmaps) {
  const map = {};
  for (const r of roadmaps) {
    map[r.id] = await obterProgresso(uid, r.id);
  }
  return map;
}
