(function () {
    angular.module('bookstore')
        .controller('booksController', ['$scope', 'BooksService', function ($scope, BooksService) {
       
        $scope.rowSelected = [];
        //function to automatically populate the table 
        activate();

        function activate() {
            getBooks();
        };

        function getBooks() {
            BooksService.getBooks().then(function (response) {
                $scope.books = response.data;
            });
       
        };
        
        function insertBook(book){
            
             BooksService.addBook(book).then(function successCallback(response){
                   
                   if(response) {
                       
                       $scope.books = response.data;
                   } 
             }, function errorCallback(response) {
                       return false;
                   });
            
            
        };
        //getting selected row index
        $scope.rowIndex = function (index) {
            $scope.selectIndex = index;
            $scope.rowSelected = [];
            $scope.rowSelected[index] = true;
        };
        
        //add button
        $scope.add = function () {
            $scope.isFormVisible = true;
            $scope.isEditVisible = false;
        };
       /* $scope.toggleButtons = function (){
            $scope.isFormVisible != $scope.isFormVisible;
            $scope.isEditVisible != $scope.isEditVisible;
        };*/
        //validate user input function
        $scope.validate = function validate(data){
            
            if(data.bookName == null || data.bookName == "")
                {
                    alert("Please enter a book name!");
                    return false;
                }
            if(data.author == null || data.author == "")
                {
                    alert("Please enter an author name!");
                    return false;
                }
            if(data.ISBN == null || data.ISBN == "")
                {
                    alert("Please enter ISBN code!");
                    return false;
                }
            if(data.numBooks == null || data.numBooks == "")
                {
                    alert("Please enter valid input!");
                    return false;
                    
                }
            if(data.pubDate == null || data.pubDate == "")
                {
                    alert("Please enter valid input!");
                    return false;
                }
            if(data.bookCat == null || data.bookCat == "")
                {
                    alert("Please enter valid input!");
                    return false;
                }
            if(data.numBooksIssued == null || data.numBooksIssued == "")
                {
                    alert("Please enter valid input!");
                    return false;
                }
            else{
                for(i=0; i< $scope.books.length; i++){
               
                    if($scope.books[i].ISBN == data.ISBN){
                    alert("ISBN code already exist!");
                    return false;
                }
                
            };
                return true;
        };
        };
       
        //add submit button 
         $scope.addBook = function addBook(book) {
             
           if($scope.validate(book) == true){
             insertBook(book);
             $scope.books.unshift(book);
             $scope.isFormVisible = false;
                       
            }else return false;
             
         };
        // edit button
        $scope.edit = function () {
            var selectedIndex = $scope.selectIndex;
            if (selectedIndex == null || selectedIndex == undefined) {
                alert('Please Select a Row!');
                return;
            };
            var obj = $scope.books[selectedIndex];
           
           $scope.isEditVisible = true;
           $scope.isFormVisible = false;
           $scope.current = obj;
        };
        
        //edit submit button
        $scope.editSubmit = function (userInput) {
            $scope.current.numBooks = userInput;
            $scope.current = null;
            $scope.newData = {};
            $scope.selectIndex = null;
            $scope.isEditVisible = false;
        };
        
        //delete button
        $scope.delete = function () {
            var it = $scope.books;
            if (it[$scope.selectIndex].numBooksIssued == 0) {
                it.splice($scope.selectIndex, 1);
                alert('Number of Books Issued must be 0');
                return;
            };
            
           $scope.isEditVisible = false;
           $scope.isFormVisible = false;
        };
        
        }]
)})();