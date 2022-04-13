var express = require('express');
var app = express();

// GET 
// app.get('/',function (req,res,) {
//     res.send('hello_world');
// })
app.use(express.static(__dirname))
var server = app.listen(3000,function () {
    var host = server.address().address;
    var port = server.address().port;


    console.log('应用正在监听: http://%s:%s',host,port);
})