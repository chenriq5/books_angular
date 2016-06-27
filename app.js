var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// Views Directory Location
app.use('/public', express.static('/public'));

// Set Public directory as the static folder
app.use(express.static('./public'));


// This is needed for the forms to work
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


///// Routing \\\\\

app.get('/', function (req, res) {
  res.render('index.html');
});

app.get('/api/books', function (req, res) {
  res.send('hello books');
});

// API Routes
//var api = require('./server/scripts/routes.api.js');
//app.use('/api', api);


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});