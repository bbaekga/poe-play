/**
 * Maps a chaos price to a 0–9 highlight level used across stash tabs to color
 * item prices (white → yellow → orange → red as value rises). Shared by every
 * `src/model/*.ts` that renders a priced tile; keep the single source here.
 */
export function calcLevel(value: number): number {
  if (0 <= value && value < 5) return 0
  else if (5 <= value && value < 10) return 1
  else if (10 <= value && value < 20) return 2
  else if (20 <= value && value < 30) return 3
  else if (30 <= value && value < 40) return 4
  else if (40 <= value && value < 50) return 5
  else if (50 <= value && value < 60) return 6
  else if (60 <= value && value < 70) return 7
  else if (70 <= value && value < 80) return 8
  else if (80 <= value) return 9
  else return 0
}
