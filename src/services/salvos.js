import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY_EVENTOS = "salvos_eventos";
const KEY_VAGAS = "salvos_vagas";

async function getSalvos(key) {
  try {
    const raw = await AsyncStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

async function setSalvos(key, list) {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(list));
  } catch {}
}

export async function getEventosSalvos() {
  return getSalvos(KEY_EVENTOS);
}
export async function getVagasSalvas() {
  return getSalvos(KEY_VAGAS);
}

export async function isEventoSalvo(id) {
  const list = await getEventosSalvos();
  return list.includes(id);
}
export async function isVagaSalva(id) {
  const list = await getVagasSalvas();
  return list.includes(id);
}

export async function toggleEventoSalvo(id) {
  const list = await getEventosSalvos();
  const idx = list.indexOf(id);
  if (idx >= 0) list.splice(idx, 1);
  else list.push(id);
  await setSalvos(KEY_EVENTOS, list);
  return list;
}

export async function toggleVagaSalva(id) {
  const list = await getVagasSalvas();
  const idx = list.indexOf(id);
  if (idx >= 0) list.splice(idx, 1);
  else list.push(id);
  await setSalvos(KEY_VAGAS, list);
  return list;
}
