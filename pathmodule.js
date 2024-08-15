const path = require('node:path');

const a = path.basename('C:\\temp\\myfile.html');
console.log(a);
// Returns: 'myfile.html'

const b = path.dirname('C:\\temp\\myfile.html');
console.log(b);
// Returns: 'C:\\temp'

const c1 = path.extname('C:\\temp\\myfile.html');
const c2 = path.extname('C:\\temp\\myfile.');
const c3 = path.extname('C:\\temp\\myfile');

console.log(c1);
// Returns: '.html'

console.log(c2);
// Returns: '.'

console.log(c3);
// Returns: ''

//To Run this File: nodemon .\pathmodule.js