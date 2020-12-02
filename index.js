
var express = require('express');
var app = express();
var http = require('http').createServer(app);
const webport = process.env.PORT || 8080;

app.get("/log.png", (req, res) => {
    console.log("---- RECIEVED REQUEST ----")
    console.dir(req);
})

http.listen(webport, function(){
    console.log('listening on *:' + webport);
});