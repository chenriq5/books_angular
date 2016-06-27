(function(){
    console.log('loading service')
    angular.module('bookstore')
    .factory('BooksService', function($http){ 
        console.log('service called')
        
         var urlBase = 'http://localhost:3000/';
         var booksService = {};
        
        function getBooks(){
            console.log('getting books')
          var books = $http.get(urlBase +'api/books').then(function(response){
               return response;
           }); 
            
            return books;
        };
    
        booksService.getBooks = getBooks;
    
         return booksService;
        
    });
})();
