angular.module('bookstore',[])
    .controller('booksController', function($scope){    
        console.log('control loaded');
    $scope.isFormVisible= false;
    
    var products =
    [{        
        bookName:'The Giver',
        author: 'Lois Lowry',
        ISBN: 111,
        numBooks: 5,
        pubDate: 9/2/16,
        bookCat: 'Fiction',
        numBooksIssued: 4                    
    },        
    {
        bookName: 'Book 2',
        author: 'John Doe',
        ISBN: '112',
        numBooks: 10,
        pubDate: 8/12/96,
        bookCat: 'biography',
        numBooksIssued: 5
        
    }];
    
      $scope.addBook = function(bookData){
          
          $scope.items.push(bookData);
          $scope.newData = {};
          console.log(bookData);
          
    };
        
       
        $scope.items = products; 
        //console.log($scope.items);
        //console.log($scope.newData);
    })

   

    .controller('tableController',function(){
        this.row =1;
        
        this.setRow = function(newValue){
            this.row = newValue;
        }
        
        this.isSet = function(rowName){
           return this.row === rowName;
        }
    });

//forms display after buttons are clicked
function myButton(){
    var iframe = $("#showButton");
    iframe.attr("src", iframe.data("src"));
    
}

//adjust iframe according to form contents
$('iframe').load(function(){
    $(this).height($(this).contents().outerHeight());
});