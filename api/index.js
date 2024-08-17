import express from 'express';
const app =  express();
import http  from 'http';
const server = http.createServer(app);
import { Server } from 'socket.io'
const io = new Server(server);
app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

// make connection:
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
      });
  });
server.listen(3001, () => {
  console.log('listening on *:3001');
});