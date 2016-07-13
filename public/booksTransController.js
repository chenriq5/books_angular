 (function(){
     angular.module('bookstore')
    .controller('booksTransController', ['$scope', 'BooksService', function ($scope, BooksService){
        
    //getBooks();
        
    function getBooks(){

    BooksService.getBooks().then(function(response){
    console.log(response);
   });
};
}]);

 })();