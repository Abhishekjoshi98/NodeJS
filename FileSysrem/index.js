
// Read Files

const { writeFileSync } = require('node:fs');
const fs = require('node:fs')

console.log('start');
const readingFile = fs.readFileSync("./ReadingDataFile.txt");
console.log(readingFile.toString());
console.log('End reading');


// Write Files
fs.writeFileSync('./OverritenFile.txt', 'I Am OverRidding the file contents')
