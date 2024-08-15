const os = require('node:os');

//Returns the amount of free system memory in bytes as an integer.
console.log(os.freemem())

//Returns the operating system CPU architecture for which the Node.js binary was compiled.
console.log(os.arch())

//Returns an array of objects containing information about each logical CPU core. 
console.log(os.cpus())

//Returns the host name of the operating system as a string.
console.log(os.hostname())

//Returns the operating system as a string.
console.log(os.release())

//To Run this File: nodemon .\osmodule.js