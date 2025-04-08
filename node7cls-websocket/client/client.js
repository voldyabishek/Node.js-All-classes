const WebSocket = require('ws')

const client = new WebSocket('ws://localhost:1234')//replace with your server address

client.on('open',()=>{
    console.log('Connected to server')


    //send message to the server
    client.send('hello,server!');
});

 client.on('message',(message)=>{
    console.log(`recivied:${message}`);
 });

 //handle discoonection

 client.on('close',()=>{
    console.log("disconnected from server")
 })