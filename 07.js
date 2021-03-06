var fs = require('fs');
var concatenation = '';
fs.readdirSync('.')
  .filter(function(filename) {
    // ignore directories
    return fs.statSync(filename).isFile();
  }).forEach(function(filename) {
    // add contents to our output
    concatenation += fs.readFileSync(filename, 'utf8');
});
console.log(concatenation);