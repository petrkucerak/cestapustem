import fs from "fs";
export function getPostMetadata() {
  return JSON.parse(fs.readFileSync("./days-meta.json"));
}
