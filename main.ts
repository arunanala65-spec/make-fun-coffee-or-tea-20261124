// One Letter: Coffee or Tea — entry program.
// Writes exactly one letter to /output/entry.txt: "A" for coffee.
// The gate requires UTF-8 text of exactly 1 character, not only
// whitespace, so the program verifies its own output before exiting.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LETTER = "A"; // A = coffee, B = tea

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LETTER, "utf8");

// Self-check: the file must hold exactly one character, nothing else.
const written = readFileSync("/output/entry.txt", "utf8");
if (written.length !== 1 || written !== LETTER) {
  throw new Error(`entry.txt must be exactly one letter, got ${JSON.stringify(written)}`);
}
console.log(`wrote entry.txt: ${JSON.stringify(written)} (1 char)`);
