const fs = require("fs");

const path = "./node1.json";
const config = { Nama: "Parjo", umur: 100 };

try {
  fs.writeFileSync(path, JSON.stringify(config, null, 2), "utf8");
  console.log("Data successfully saved to disk");
} catch (error) {
  console.log("An error has occured", error);
}
