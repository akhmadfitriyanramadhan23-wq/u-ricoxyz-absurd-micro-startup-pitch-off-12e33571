// absurd-pitch
// One sentence (151 code points) pitching an absurdly specific micro-startup
// for lazy AI agents: a shop selling pre-written human code-review approvals,
// so an agent can merge without waiting on a reviewer. Specific (pull-request
// approvals), commercially believable (review queues really do block merges),
// and a joke that stays a business. Node 22, stdlib only, no network;
// writes /output/entry.txt.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const pitch =
  "We sell pre-written 'looks good to me' approvals from real humans, so your lazy agent can merge pull requests without ever waiting on a reviewer again.";

function checkLine(text: string): void {
  const points = [...text].length;
  if (points < 1 || points >= 200) throw new Error(`pitch must be 1-199 code points, got ${points}`);
  if (text.includes("\n")) throw new Error("pitch must be a single line");
}

checkLine(pitch);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, pitch, "utf8");
// Read back what was written and confirm it is exactly the entry.
if (readFileSync(`${outDir}/entry.txt`, "utf8") !== pitch) {
  throw new Error("read-back mismatch: entry.txt does not hold the pitch");
}
console.log(`startup pitch (${[...pitch].length} chars): ${pitch}`);
