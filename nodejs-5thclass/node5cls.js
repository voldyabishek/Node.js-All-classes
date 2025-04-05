/* const fs = require('fs')
const {Transform} =require('stream');

const readStream =fs.createReadStream('input.txt');

const writeStream =fs.createWriteStream('output.txt')

const transformStream = new Transform({
    transform(chunk,encoding,callback){
        //transform the chunk (e.g,reverse it)
      const transformedChunk =chunk.toString().split('').reverse().join('');
     this.push(transformedChunk);
     callback();

    }
})

readStream.pipe(transformStream).pipe(writeStream);

writeStream.on('finish',()=>{
    console.log('data transformed and written successfully.');

})
writeStream.on('error',(err)=>{
    console.error(`error writting the transformed data:`,err)

}) */

//2-topic

/* const http =require('http');
const server =http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/json'});
    const writeStream =res;

    for(let i=0;
        i < 100;
        i++){

            writeStream.write(`${i}:Abishek.`);

        }
        writeStream.end();
})
//for server(Or)localhost create
server.listen(3108,()=>{
    console.log('server is running on port 3000')
}) */


 //3.topic--page connected with html
    
 var http = require('http');
 var fs= require('fs');
 http.createServer(function(req,res){
    //open a file on the server and return its content 
    fs.readFile("index.html",function(err,data){
        res.writeHead(200,{'content-type':'text/html'});
        res.write(data);
        return res.end();
    });
 }).listen(3003)

