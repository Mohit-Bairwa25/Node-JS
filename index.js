// Using CommonJS
const harry = require("./second.js"); // Importing the entire module
const {garry : marry} = require("./second.js");
console.log("Hello World", harry, marry);

// Using ES6 (importing an ES Module dynamically)
import('./second.mjs').then((module) => {
    const carry = module.default;
    console.log("Hello Universe", carry);
});

import('./second.mjs').then((module) => {
    const {barry : larry} = module; //// Destructure named export
    console.log("Hello Galaxy", larry);
});


/*
Module Wrapper Function
(function (exports, require, module, __filename, __dirname) {
    // Module code goes here
});
Check Documentation No.9
*/
console.log(exports, require, module, __filename, __dirname);