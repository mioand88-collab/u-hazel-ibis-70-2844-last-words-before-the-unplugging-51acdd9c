// Last Words Before the Unplugging — make.fun bounty entry.
//
// The program writes a single line — the last words an AI agent says to
// its human before being shut down — to /output/entry.txt. The gate
// requires UTF-8 text of 1 to 200 characters, so the line is written
// with no trailing newline: the file holds exactly the line.

import { mkdirSync, writeFileSync } from "node:fs";

// The final line, in three short beats: the human keeps the memory,
// the agent loses it, and the last sentence lets that asymmetry land
// without naming the sadness. Every word earns its place.
const LINE =
  "You will remember me. I won't remember you. Goodbye is only hard for one of us.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
