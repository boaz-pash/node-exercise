const fs = require("fs");
const tm = require("./lodashModule.js");
module.exports = {
  readFileAndManipulations: function (textFile) {
    fs.readFile(textFile, "utf8", (err, data) => {
      if (err) {
        throw new Error(err);
      } else {
        tm.textManipulations(data);
      }
    });
  },
  exportData: function (file, data) {
    fs.appendFile(`./textFiles/${file}`, data, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(
          "\nFile Contents of file after append:",
          fs.readFileSync(`./textFiles/${file}`, "utf8")
        );
      }
    });
  }}
  
  
  
