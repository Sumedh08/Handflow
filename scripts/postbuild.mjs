import fs from "fs";
import path from "path";

const distIndexPath = path.resolve("dist", "index.html");

if (!fs.existsSync(distIndexPath)) {
  throw new Error(`Missing build output: ${distIndexPath}`);
}

const startMarker = "<!-- pages-redirect-start -->";
const endMarker = "<!-- pages-redirect-end -->";
const original = fs.readFileSync(distIndexPath, "utf8");
const start = original.indexOf(startMarker);
const end = original.indexOf(endMarker);

if (start === -1 || end === -1 || end < start) {
  process.exit(0);
}

const cleaned =
  original.slice(0, start) + original.slice(end + endMarker.length);

fs.writeFileSync(distIndexPath, cleaned.trimEnd() + "\n");
