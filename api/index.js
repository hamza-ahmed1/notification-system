import express from 'express';
const app =  express();
import http  from 'http';
const server = http.createServer(app);
import { Server } from 'socket.io'
const io = new Server(server,{
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});
import cors from 'cors'
import MessageRoutes from './routes/message.js'
import SectionRoutes from './routes/sections.js'
// app.get('/', (req, res) => {
//   res.send('<h1>Hello world</h1>');
// });
app.use(cors());
app.use(express.json());
// setup messaging routes:
app.use('/api/message',MessageRoutes);
app.use('/api/sections',SectionRoutes);
// make connection:
io.on('connection', (socket) => {
    console.log('a user connected');
      // event emitter for joing the room:
      socket.on('join_room', (room) => {
        socket.join(room);
        console.log(`User joined room ${room}`);
      })
    //event emitter for send_message;
    socket.on('send_message', (data) => {
      socket.to(data.room).emit("recive_message",data);
      console.log(data);
    })
    socket.on('disconnect', () => {
        console.log('user disconnected');
      });
  });
server.listen(3001, () => {
  console.log('listening on *:3001');
});