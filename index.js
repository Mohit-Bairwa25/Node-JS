// Using CommonJS
const harry = require("./second.js"); // Importing the entire module
console.log("Hello World", harry);

// Using ES6 (importing an ES Module dynamically)
import('./second.mjs').then((module) => {
    const carry = module.default;
    console.log("Hello Universe", carry);
});


/*
Module Wrapper Function
(function (exports, require, module, __filename, __dirname) {
    // Module code goes here
});
*/
console.log(exports, require, module, __filename, __dirname);