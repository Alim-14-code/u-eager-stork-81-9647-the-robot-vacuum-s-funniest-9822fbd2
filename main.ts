// The Robot Vacuum's Funniest Excuse — entry program (v2).
// Writes exactly one line, at most 120 characters, to /output/entry.txt:
// the excuse a robot vacuum gives for missing a spot.
import { mkdirSync, writeFileSync } from "node:fs";

const MAX_CHARS = 120;

// First-person vacuum voice, vacuum-world joke: dust bunny, picket line, suction pay.
const ENTRY =
  "I didn't miss that spot — the dust bunny there unionised, and I'm not crossing a picket line for suction pay.";

if (ENTRY.length === 0 || ENTRY.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${ENTRY.length}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, { encoding: "utf8" });
console.log(`wrote ${ENTRY.length}-character entry to /output/entry.txt`);
