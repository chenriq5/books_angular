(function () {
    angular.module('bookstore').factory('BooksService', function ($http) {
        //local host url
        var urlBase = 'http://localhost:3000/';
        var booksService = {};
        
        //populating the table using get method
        function getBooks() {
            //gets books from the database using factory service
            var books = $http.get(urlBase + 'api/books').then(function (response) {
                return response;
            });
            return books;
        };
        
        //adds a new book to the database
        function addBook(book){
            //adds the book to the database using factory service
            var book = $http.post(urlBase + 'api/books', book).then(function (response) {
              // console.log(response);
                return response;
            });
            return book;
        };
        
        //edits the number of books
        function editBook(book){
            //saves the changes in the database
            var book =$http.put(urlBase + 'api/books', book).then(function(reponse){
                return reponse;
            });
            return book;
        };
        
        
        booksService.getBooks = getBooks;
        booksService.addBook = addBook;
        booksService.editBook = editBook;
        
        return booksService;
    });
})();