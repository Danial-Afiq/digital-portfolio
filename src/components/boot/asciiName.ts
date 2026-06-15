/**
 * Tiny 5-row block font, just the glyphs needed for the name banner.
 * Building the banner column-by-column from fixed-width glyphs guarantees
 * the rows stay aligned (no hand-tweaked spacing).
 */
const GLYPHS: Record<string, string[]> = {
  D: ["████ ", "█   █", "█   █", "█   █", "████ "],
  A: [" ███ ", "█   █", "█████", "█   █", "█   █"],
  N: ["█   █", "██  █", "█ █ █", "█  ██", "█   █"],
  I: ["█████", "  █  ", "  █  ", "  █  ", "█████"],
  L: ["█    ", "█    ", "█    ", "█    ", "█████"],
  F: ["█████", "█    ", "████ ", "█    ", "█    "],
  Q: [" ███ ", "█   █", "█   █", "█  ██", " ████"],
  " ": ["   ", "   ", "   ", "   ", "   "],
};

export function asciiBanner(text: string): string {
  const rows = 5;
  const lines = Array.from({ length: rows }, () => "");
  for (const ch of text.toUpperCase()) {
    const glyph = GLYPHS[ch] ?? GLYPHS[" "];
    for (let r = 0; r < rows; r++) lines[r] += glyph[r] + " ";
  }
  return lines.join("\n");
}
