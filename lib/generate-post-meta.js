const fs = require("fs");

const folder = "./_days";

async function main() {
  const files = fs.readdirSync(folder);
  let data = new Array();
  files.map((file) => {
    const content = fs.readFileSync(`${folder}/${file}`);
    const json = JSON.parse(content);
    data.push({ dayName: json.dayName, slug: json.slug });
  });
  fs.writeFileSync("./days-meta.json", JSON.stringify(data));
}

main();
