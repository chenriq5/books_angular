//set up
var express = require('express');
var app = express();
var mongodb = require('mongodb');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Schema = mongoose.Schema;

//configuration
mongoose.connect('mongodb://127.0.0.1:27017/books');
// Set Public directory as the static folder
app.use(express.static('./public'));
// This is needed for the forms to work
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

//define model
var bookSchema = new Schema({
    bookName: String
    , author: String
    , ISBN: Number
    , numBooks: Number
    , pubDate: String
    , bookCat: String
    , numBooksIssued: Number
}, {
    collection: 'first'
});

var bookItem = mongoose.model('bookItem', bookSchema);

module.exports = bookItem;
//routes
//get all books
app.get('/api/books', function (req, res) {
    bookItem.find(function (err, Book) {
        if (err) res.send(err)
        res.send(Book);
        console.log(Book);
    });
});
// create a book and send back all books after creation
app.post('/api/books', function (req, res) {
    bookItem.create({
        bookName: req.body.bookName
        , author: req.body.author
        , ISBN: req.body.ISBN
        , numBooks: req.body.numBooks
        , pubDate: req.body.pubDate
        , bookCat: req.body.bookCat
        , numBooksIssued: req.body.numBooksIssued
    , }, function (err, Book) {
        if (err) res.send(err);
        // get and return all the books after you create another
        bookItem.find(function (err, Book) {
            if (err) res.send(err)
            res.render(Book);
            //console.log(Book);
        });
    });
});
/* // delete a todo
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
app.get('*', function (req, res) {
    res.sendFile('/public/index.html', {
        root: __dirname
    });
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