
var express = require('express');
var app = express();
var http = require('http').createServer(app);
const webport = process.env.PORT || 8080;

app.get("/log.png", (req, res) => {
    console.log("---- RECIEVED REQUEST ----")
    console.dir(req);

    res.redirect("https://noto-website-2.storage.googleapis.com/emoji/emoji_u1f603.png")

})

http.listen(webport, function(){
    console.log('listening on *:' + webport);
});