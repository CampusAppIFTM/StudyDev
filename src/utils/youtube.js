/**
 * Extrai o videoId de qualquer formato de URL do YouTube.
 * Suporta:
 *  - https://www.youtube.com/embed/ABC123
 *  - https://www.youtube.com/embed/ABC123?si=xyz
 *  - https://www.youtube.com/watch?v=ABC123
 *  - https://www.youtube.com/watch?v=ABC123&t=10s
 *  - https://youtu.be/ABC123
 *  - https://www.youtube.com/shorts/ABC123
 *  - ABC123 (já é o ID)
 */
export function extractVideoId(urlOrId) {
  if (!urlOrId || typeof urlOrId !== "string") return null;
  const input = urlOrId.trim();
  if (!input) return null;

  // Se já parece ser apenas o ID (11 chars padrão, mas aceita 6+ para testes)
  if (/^[a-zA-Z0-9_-]{11}$/.test(input)) return input;
  // Aceita IDs curtos de exemplo como ABC123 (6+ chars sem URL)
  if (/^[a-zA-Z0-9_-]{6,}$/.test(input) && !input.includes("/") && !input.includes("?") && !input.includes(".")) {
    // Só retorna direto se não contém caracteres de URL; evita falso positivo
    // Mas para compatibilidade, se não casar nenhum padrão abaixo, tenta retornar como ID
  }

  const patterns = [
    /\/embed\/([a-zA-Z0-9_-]{6,})(\?|\/|$)/,
    /[?&]v=([a-zA-Z0-9_-]{6,})/,
    /youtu\.be\/([a-zA-Z0-9_-]{6,})(\?|\/|$)/,
    /\/shorts\/([a-zA-Z0-9_-]{6,})(\?|\/|$)/,
    /\/v\/([a-zA-Z0-9_-]{6,})(\?|\/|$)/,
  ];

  for (const p of patterns) {
    const m = input.match(p);
    if (m && m[1]) return m[1];
  }

  // Fallback: se a string não contém URL mas parece ID, retorna
  if (/^[a-zA-Z0-9_-]{6,}$/.test(input) && !input.includes("http")) {
    return input;
  }

  return null;
}

/**
 * Converte qualquer URL/id para watch URL (opcional, para abrir no navegador)
 */
export function toWatchUrl(urlOrId) {
  const id = extractVideoId(urlOrId);
  if (!id) return urlOrId;
  return `https://www.youtube.com/watch?v=${id}`;
}
