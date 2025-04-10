const http = require('http');

const hostname ='127.0.0.1';//you can change this to your server's IP or domain
const port = 3001;//you can change this to any avilable port number


const server = http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    res.end('Hello,world!\n')
});

server.listen(port,hostname,()=>{
    console.log(`server running at http://${hostname}:${port}/`);
});