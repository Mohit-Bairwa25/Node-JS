const {Console} = require ('console')
const http = require('node:http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res)=>{
    console.log(req)
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html')
    res.end('<h1>This is The Task Master </h1> <p> I am Gonna Rock Your World </p>');
})

server.listen (port, ()=>{
    console.log(`Server is Listening to Port ${port}`);
});