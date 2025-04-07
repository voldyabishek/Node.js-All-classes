//server
/* 
const http = require('http');
http.createServer(function(request,responce){
    debugger
   
     responce.write("Welcome to Livewire\n");
     responce.write("welcome to Livewire\n");
     responce.write("welcome to Livewire");
     responce.write("welcome to Livewire");
     responce.write("welcome to Livewire");
     responce.end();
})
.listen(3000)
console.log("server is running on port 3000") */

/* --------------------- */


//2.topic -->websocket

   const WebSocketServer = require('ws')

   //creating new websocket server
   const wss = new WebSocketServer.Server({port:5005})

   //creating connection using websocket

   wss.on("connection",ws=>{
    console.log("new client connnected");


    //sending message to client
    ws.send ("welcome,you are connected");


    //on message from client
    ws.send("message",data=>{
        console.log(`Client has sent us:${data}`)
    });
   //handling what to do  when clients disconnected from server
   ws.on("close",()=>{
    console.log("the client has connected ")
   });

   //handling client connection error

   ws.oneerror = function(){
    console.log("some Error occurred")
   }

});
console.log("the websocket server is running on port 5000")