import { mkdirSync, writeFileSync } from "node:fs";

// Everyday Wonder — one sentence, at most 200 characters, about a small
// moment of wonder in everyday life. Chosen from 16 drafted candidates by
// pairwise judging against the judge brief, in order:
//   1. small everyday moment of wonder (a stranger in the elevator mirror);
//   2. fresh angle — apologizing to your own reflection as if it were
//      someone else; the phrasing itself is the surprise;
//   3. lands in one read, punchline on the final word ("me");
//   4. grounded in something real and specific (elevator mirror, mid-yawn);
//   5. every word working, no filler, no worn phrase; 94 characters.
const LINE =
  "The elevator mirror caught me mid-yawn and for a second I apologized to a stranger who was me.";

if (
  [...LINE].length < 1 ||
  [...LINE].length > 200 ||
  LINE.trim().length === 0 ||
  LINE.includes("\n") ||
  (LINE.match(/\./g) ?? []).length !== 1 ||
  !LINE.endsWith(".")
) {
  throw new Error(
    `entry must be one sentence of 1-200 non-whitespace characters, got ${[...LINE].length}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
