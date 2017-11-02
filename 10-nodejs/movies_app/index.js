var express = require('express');
var app = express();
var request = require('request');
const PORT = 8888;
var logger = require('./logger')

  // ||
  // \/
app.set('views','./views');
app.set('view engine','ejs');
  // ||
  // \/
app.use(logger);
  // ||
  // \/
  // a middleware to handle static files
app.use(express.static('public'));
  // ||
  // \/
app.get('/', function(request,response){
  response.render('index');
})
  // ||
  // \/
app.get('/about', function(request,response){
  response.send('about page');
})
  // ||
  // \/
app.get('/api/info', function(request,response){
  response.json({ version: 1 });
})
  // ||
  // \/
// app.get('/details', function(req,resp){
//     var title = req.query.title;
//     request(`http://omdbapi.com/?t=${title}&apikey=2f6435d9`, function (error, response, body) {
//     var moviesJSON = JSON.parse( body );
//     resp.render('details',{ title: moviesJSON.Title, poster: moviesJSON.Poster });
//     // moviesJSON.Title
//   })
// })

app.get('/details', function(req,resp){

  var title = req.query.title;
  const url = `http://omdbapi.com/?t=${title}&apikey=2f6435d9`;

  request({
    url: url,
    json: true
  }, function(err,respFromOMDB, movie){
    resp.render('details', { movie: movie })
  })
})


app.listen(PORT);
