// server.js

var express = require('express');
var app = express();

app.use('/', function(req, res) {
	console.log(req.method, req.url);
	res.send('hello there, express');
});

app.listen(8888);

console.log('Server running at http://localhost:8888/');

module.exports = app;


/******
var http = require('http');

http.createServer(function(req, res) {
	console.log(req.method, req.url);
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write('hello there, how are you doing today');
	res.end();
}).listen(8888);

console.log('Server running at http://localhost:8888/');
******/