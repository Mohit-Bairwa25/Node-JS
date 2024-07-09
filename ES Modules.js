/*
ES Modules (ES6 Modules)
ES Modules, also known as ES6 modules, are part of the ECMAScript standard. They provide a more modern approach to handling modules.

Asynchronous Loading: ES Modules load asynchronously. This means they don’t block execution, making them suitable for both browsers and server-side environments.
import and export: ES Modules use import and export statements.

Cyclic Dependencies Support: ES Modules handle cyclic dependencies more gracefully than CommonJS.
In summary, CommonJS is great for server-side Node.js applications, while ES Modules align with the ECMAScript standard and work well in both browsers and servers.
*/

// Importing the ES module
import { square, PI } from './esModule.js';

// Using the exported function
const number = 5;
console.log(`The square of ${number} is ${square(number)}`);

// Using the exported constant
console.log(`The value of PI is approximately ${PI}`);

/*  "type": "module" Save this line in package.json file below   "main": "Modules.js", to run this file
*/

 
