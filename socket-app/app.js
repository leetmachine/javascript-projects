const express = require('express');
const app = express();
const http = require('http').Server(app);

//#1 initialize a new socket.io instance and pass it the server object.
const io = require('socket.io')(http);


app.use(express.static(__dirname + '/node_modules'));
app.use('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');
})

//#2 listen on the 'connection' event. the client first passes a 'connect' event.
io.on('connection', (client) => {
    console.log('Client connected..');

    //we can create a disconnect event to watch for disconnects via an action or a navigating away from the page.
    client.on('disconnect', (socket) => {
        console.log("socket disconnectd " + socket);
    });

    //we can create join events for when a user first joins the socket and passes data.
    client.on('join', (data) => {
        console.log(data);
    });

    //we can create messages and include broadcast to send it to all others on the socket.
    client.on('messages', (message) => {
        console.log("broadcast fired.");
        client.emit('broad', message);
        client.broadcast.emit('broad', message);
    });
})

const PORT =  5000;
http.listen(PORT, () => console.log('Socket-app listening on port: ' + PORT));