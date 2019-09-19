const UglifyJS = require('uglify-js')
const fs = require('fs')

var code = fs.readFileSync("./src/main.js", "utf8")
var result = UglifyJS.minify(code);
console.log(result.code);
// fs.writeFileSync('./dist/main.js', result.code)