
var express = require('express');
var app = express();
var http = require('http').createServer(app);
const webport = process.env.PORT || 8080;

app.use(require('body-parser').json());

app.post("/hook/in", (req, res) => {
    console.log("---- Recieved hook! ----")

    console.dir(req.body);
    res.end();

})

http.listen(webport, function(){
    console.log('listening on *:' + webport);
});