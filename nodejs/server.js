const express = require("express");
const socketIo = require("socket.io");
const cors = require("cors");
const http = require("http");
const app = express();
const port = process.env.PORT || 9090;

app.get('/',(req,res)=>{
  res.send('hello')
})
const server = http.createServer(app);

const io = socketIo(server);
const users=[{}]

app.use(cors());

io.on("connection", (socket) => {
  console.log("new connection");

  socket.on('joined',({User})=>{
    users[socket.id]=User
    console.log(`${User} has joined`)
    socket.broadcast.emit('userJoined',{User:users[socket.id],message:`${users[socket.id]} has joined`})
    socket.emit('welcome',{User:users[socket.id],message:`welcome to the chat ${users[socket.id]}`})
  })

  socket.on('message',({message,id})=>{
    io.emit('sendMessage',{User:users[id],message,id})
  })

  socket.on('disconnect',()=>{
    console.log(`${users[socket.id]} left the chat`)
    socket.broadcast.emit('leave',{User:users[socket.id],message:`${users[socket.id]} left the chat`})
  })

});

server.listen(port, () => {
  console.log("server is running at port" + port);
});


