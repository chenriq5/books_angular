//set up
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Schema = mongoose.Schema;



//configuration
mongoose.connect('mongodb://127.0.0.1:27017/books');
// Set Public directory as the static folder
app.use(express.static('./public'));
// This is needed for the forms to work
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//define model
var bookSchema = new Schema({
        bookName: String,
        author: String,
        ISBN: Number,
        numBooks: Number,
        pubDate: String,
        bookCat: String,
        numBooksIssued: Number    
      });

var bookItem = mongoose.model('bookItem', bookSchema);

module.exports = bookItem;

//routes
 app.get('/api/book', function(req, res) {
        bookItem.find(function(err, Book) {
            
            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.send(Book);
            console.log(Book);
        });
    });

    // create todo and send back all todos after creation
    /*app.post('/api/books', function(req, res) {

        // create a todo, information comes from AJAX request from Angular
        book.create({
            text : req.body.text,
            done : false
        }, function(err, Book) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            book.find(function(err, Book) {
                if (err)
                    res.send(err)
                res.json(Book);
            });
        });

    });

    // delete a todo
    app.delete('/api/books/:Book_id', function(req, res) {
        book.remove({
            _id : req.params.Book_id
        }, function(err, Book) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            book.find(function(err, Book) {
                if (err)
                    res.send(err)
                res.json(Book);
            });
        });
    });*/

app.get('*', function(req, res){
    res.sendFile('/public/index.html', { root: __dirname });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


//connected to database
//var db = mongoose.connection;
//db.on('error', console.error.bind(console, 'connection error:'));
//db.once('open', function(){
//        //we're connected!
//        });


///// Routing \\\\\

//app.get('/', function (req, res) {
//  res.render('index.html');
//});
//
//app.get('/api/books', function (req, res) {
//  res.send('ok');
//});

// API Routes
//var api = require('./server/scripts/routes.api.js');
//app.use('/api', api);



