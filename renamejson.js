const fs = require("fs");

fs.rename("node1.json", "node2.json", function (err) {
  if (err) throw err;
  console.log("File Renamed.");
});
