// route '/about' page
// read a file named about.html
// use this as the response
// else just respond with hello world

// you will need fs module


var http = require('http');
var fs = require('fs');

var app = function(request, response) {

  var path = request.url

  if (path === '/about') {
    fs.readFile('about.html', 'utf-8', function(err, data){
    response.writeHead(200, {'content-type': 'text/html'});
    response.write(data);
    response.end();
    })
  } else if (path === '/api' ){
    response.writeHead(200,{'content-type':'application/json'});
    response.write('{"test" : "one"}');
    response.end();
  } else {
    response.writeHead(404);
    response.write('hello world');
    response.end();
  }

}

var server = http.createServer( app );
server.listen(8888);


// callback signature
// fs.readFile('/about', 'utf-8', function(err, data) {
//   if (err) {
//     response.write('hello world');
//     response.end();
//   } else {
//     console.log(data);
//   }
// });
