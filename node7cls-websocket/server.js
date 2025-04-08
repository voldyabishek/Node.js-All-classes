const Websocket =require('ws');
const server = new Websocket.Server({port:1234});


server.on('connection',(socket)=>{
    console.log('A client connected');

    //handle incoming message from clients
    socket.on('messsage',(message)=>{
        console.log(`recevied:${message}`);


        //send a responce back to the client 
        socket.send('server recivied your message:'+message);
    });

    //handle disconnects

    socket.on('close',()=>{
        console.log('A client disconnected')
    })
})