/*
CommonJS Modules
CommonJS is a set of standards used to implement modules in JavaScript. It was initially developed for server-side applications with Node.js.

Synchronous Loading: CommonJS modules load synchronously. When you use require('module') to import a module, it blocks execution until the module is fully loaded.
require() and module.exports: In CommonJS, you use require() to import modules and module.exports (or exports) to define what your module exports.
*/

// Importing the CommonJS module
const com = require('./myModule.cjs');

// Using the exported function
console.log(com.sayHello());

// Using the exported variable
console.log(`My favorite number is ${com.myNumber}`);

/*  "type": "module" Save this line in package.json file below   "main": "Modules.js", to run this file
*/