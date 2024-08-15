const fs = require('node:fs');

//fs.readFile(path, options, callback);

fs.readFile('file.txt', 'utf8', (err,data)=>{
    console.log(err, data);
})
// null Content of the File

const a = fs.readFileSync('file.txt')

console.log(a)
//<Buffer 43 6f 6e 74 65 6e 74 20 6f 66 20 74 68 65 20 46 69 6c 65>

console.log(a.toString)
//[Function: toString]

console.log(a.toString())
//Content of the File

console.log("Finished Reading File")

fs.writeFile('file2.txt','This 2nd File DATA', (err1, data1)=>{
    console.log(err1, data1, 'Written To The File')
})
//null undefined Written To The File

    b = fs.writeFileSync('file2.txt','This 2nd File DATA Sync')
    console.log (b)
    //undefined


//To Run this File: nodemon .\fsmodule.js