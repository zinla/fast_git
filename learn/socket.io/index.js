const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

//在命令行获得 的变量值 输出到 terminal中
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
  });
});

io.on('connection', (socket) => {
  socket.broadcast.emit('hi');
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});