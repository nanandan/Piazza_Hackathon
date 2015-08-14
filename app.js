var http = require('http');
var express = require('express');
var app = express();
var path = require('path');
var server = require ('http').createServer (app);


app.set('port', process.env.PORT || 3002);


app.use(express.static(__dirname));

// app.use(express.static(path.join(__dirname, '/images')));
// app.use(express.static(path.join(__dirname, '/scripts')));

console.log(__dirname, "/images");



app.get('/', function(req,res){
	res.sendFile(__dirname + '/demo.html');
});


/*

http.createServer(app).listen(app.get('port')), function(){
	console.log("Server running on port " + app.get('port'));

}*/

server.listen(3002);