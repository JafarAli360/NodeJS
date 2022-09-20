const fs = require("fs");

const isi = fs.readFileSync("./node1.json", "utf-8");

console.log(isi);
