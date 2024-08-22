import express from 'express';
const app =  express();
import http  from 'http';
const server = http.createServer(app);
import { Server } from 'socket.io'
const io = new Server(server);
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
    socket.on('disconnect', () => {
        console.log('user disconnected');
      });
  });
server.listen(3001, () => {
  console.log('listening on *:3001');
});