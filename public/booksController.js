angular.module('bookstore',[])
    .controller('booksController', function($scope){    
        
    var products =
    [{        
        book_name:'The Giver',
        author: 'Lois Lowry',
        ISBN: 111,
        num_books: 5,
        pub_date: 9/2/16,
        book_cat: 'Fiction',
        num_books_issued: 4                    
    },        
    {
        book_name: 'Book 2',
        author: 'John Doe',
        ISBN: '112',
        num_books: 10,
        pub_date: 8/12/96,
        book_cat: 'biography',
        num_books_issued: 5
        
    }];
    
     $scope.submit = function(){
      $scope.items.push($scope.newData);
      $scope.newDate = '';
    };
        
       
        $scope.items = products; 
        console.log($scope.items);
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

function myButton(){
    var iframe = $("#showButton");
    iframe.attr("src", iframe.data("src"));
    
}