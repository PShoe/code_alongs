var express = require('express');
var app = express();
var request = require('request');
const PORT = 8888;

app.set('views','./views');
app.set('view engine','ejs');

app.get('/', function(request,response){
  response.render('index');
})

app.get('/details', function(req,resp){
    var title = req.query.title;
    request(`http://omdbapi.com/?t=${title}&apikey=2f6435d9`, function (error, response, body) {
    var moviesJSON = JSON.parse( body );
    resp.render('details',{ title: moviesJSON.Title, poster: moviesJSON.Poster });
    // moviesJSON.Title
  })
})


app.listen(PORT);
