const fs = require("fs");

fs.rename("node2.txt", "node.txt", function (err) {
  if (err) throw err;
  console.log("File Renamed.");
});
