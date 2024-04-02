// Create web server that listens on port 3000
// and serves a static file from the file system
// when a request is made to the root URL.

// Load the http module to create an http server.
var http = require('http');
var fs = require('fs');
var url = require('url');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  var path = url.parse(request.url).pathname;
  console.log('path: ' + path);
  if (path == '/') {
    path = '/index.html';
  }

  fs.readFile(__dirname + path, function (err, data) {
    if (err) {
      response.writeHead(404, { 'Content-Type': 'text/html' });
      response.end('<h1>404 Not Found</h1>');
    } else {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(data);
    }
  });
});

// Listen on port 3000, IP defaults to