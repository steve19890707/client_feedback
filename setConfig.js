let _API_URL = process.argv[2];

console.log(process);

let content =
  `export const API_URL = '${_API_URL}'\n`;

var fs = require("fs");

let setConfig = () => {
  fs.writeFile("./src/configs/APIUrl.js", content, "utf-8", err => {
    if (err) throw err;
    console.log(`
      ******************************
        > API_URL: ${_API_URL}
      ******************************
    `);
  });
};

setConfig();
