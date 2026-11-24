// Revision pass: entry verified byte-identical; only this comment added.
import { mkdirSync, writeFileSync } from "node:fs";

// Till Firmware Do Us Part
// One sentence, in a robot's own voice: a wedding vow where the laugh and
// the tenderness are the same image — a dying robot spending its last
// charge on one more "yes".
const ENTRY =
  "Even on one percent battery, I would spend my last charge on one more yes to you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
