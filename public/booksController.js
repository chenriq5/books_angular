(function(){
    console.log('controller loaded');
    angular.module('bookstore')
    .controller('booksController', ['$scope','BooksService', function ($scope, BooksService){ 
     console.log('controller built');
    
        getBooks();
  
    function getBooks(){
        
       BooksService.getBooks().then(function(response){
           console.log(response);
       });
   };
        
    $scope.rowSelected = [];
    var products =
    [{        
        bookName:'The Giver',
        author: 'Lois Lowry',
        ISBN: 111,
        numBooks: 5,
        pubDate: '9/2/16',
        bookCat: 'Fiction',
        numBooksIssued: 4                    
    },        
    {
        bookName: 'Book 2',
        author: 'John Doe',
        ISBN: '112',
        numBooks: 10,
        pubDate: '8/12/96',
        bookCat: 'biography',
        numBooksIssued: 0
        
    }];
    
     $scope.items = products; 
    
    //add button

     $scope.add= function(){
        $scope.isFormVisible= true; 
        $scope.isEditVisible = false;
    };
     
    //add submit button 
      $scope.addSubmit = function(bookData){
          
          $scope.items.push(bookData);
          $scope.newData = {};
          $scope.isFormVisible= false; 
          console.log(newData);
         
    };
    
    //getting selected row index
        $scope.rowIndex= function(index){
            $scope.selectIndex = index; 
            $scope.rowSelected= [];
            $scope.rowSelected[index]= true;
            
        };

    // edit button
        $scope.edit= function(){
            var selectedIndex = $scope.selectIndex;
            
            if(selectedIndex == null || selectedIndex == undefined){
                alert('Please Select a Row!');
                return;
            } 
            
            var obj = $scope.items[selectedIndex];
            //console.log(obj);
             
            $scope.isEditVisible = true;
            $scope.isFormVisible= false;
            
            $scope.current = obj;
            
        };
    
    //edit submit button
    $scope.editSubmit = function(userInput){
        
       $scope.current.numBooks = userInput;
       $scope.current = null;
       $scope.newData= {};
       $scope.selectIndex = null;
       $scope.isEditVisible = false;
    };
    
    //delete button
    $scope.delete= function(){
        var it = $scope.items;
        
        if(it[$scope.selectIndex].numBooksIssued == 0){
            
           it.splice($scope.selectIndex,1);  
            return;
        };
        
         $scope.isEditVisible = false;
         $scope.isFormVisible= false;
    
    };

         
    }]);
})();
