(function () {
    angular.module('bookstore').factory('BooksService', function ($http) {
        var urlBase = 'http://localhost:3000/';
        var booksService = {};

        function getBooks() {
            var books = $http.get(urlBase + 'api/books').then(function (response) {
                return response;
            });
            return books;
        };
        
        booksService.getBooks = getBooks;
        
        return booksService;
    });
})();