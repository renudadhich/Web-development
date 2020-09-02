const express = require("express");
const app = express();
const server =  require('http').createServer(app);
const io = require('socket.io').listen(server);
let users = [];
let connections = [];


server.listen(process.env.PORT || 3000);
console.log('server running');

app.use(express.static('public'));

app.get('/', function(req, res) {
    console.log(`${res}`);
    res.sendFile(__dirname+ '/index.html');
});

io.sockets.on('connection', function(socket) {
    connections.push(socket);
    console.log('Connected: %s sockets connnected', connections.length)

/// Disconnect
socket.on('disconnect', function() {
    if(!socket.username) return;
    users.splice(users.indexOf(socket.username), 1);
    updateUserNames();
   connections.splice(connections.indexOf(socket), 1);
   console.log("disconnected %s sockets connected", connections.length);
});
   // send message
   socket.on('sendMessage', function(data) {
       console.log("message" , data);
       io.sockets.emit('new message', {msg : data, user : socket.username});
   });
   // New user
   socket.on('new user', function(data, callback) {
    callback(true);
    socket.username = data;
    users.push(socket.username);
    updateUserNames();
   });
   
   const updateUserNames = function() {
        io.sockets.emit('get users', users);
    }
});