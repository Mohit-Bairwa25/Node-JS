const {Console} = require ('console')
const http = require('node:http');
const fs = require('node:fs');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res)=>{
    console.log(req)
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html')

    if(req.url=='/'){
        res.statusCode = 200;
        res.end('<h1>This is The Task Master </h1>     <button onclick="window.location.href=\'/index\';">Click Here to Go Home</button>        <p> I am Gonna Rock Your World </p>');
    }
    else if(req.url =='/about'){
        res.statusCode = 200;
        res.end('<h1>This is The About T.M </h1>    <button onclick="window.location.href=\'/\';">Click Here to Go Home</button>        <p> What Do You Wana Know About Task Master </p>');
    }
    else if(req.url =='/index'){
        res.statusCode = 200;
        const data = fs.readFileSync('index.html');
        res.end(data.toString());
    }
    else{
        res.statusCode = 404;
        res.end('<h1>The Page was Not Found on Server</h1> <p> F.0 Go Somewhere Else </p>');
    }
})

server.listen (port, ()=>{
    console.log(`Server is Listening to Port ${port}`);
});