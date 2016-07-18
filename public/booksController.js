(function () {
    angular.module('bookstore').controller('booksController', ['$scope', 'BooksService', function ($scope, BooksService) {

        $scope.rowSelected = [];
        
        activate();

        function activate() {
            getBooks();
        };

        function getBooks() {
            BooksService.getBooks().then(function (response) {
                $scope.items = response.data;
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
        
        //add submit button 
         $scope.addSubmit = function addSubmit(bookData) {
            $scope.items.push(bookData);
            $scope.bookData = {};
            $scope.isFormVisible = false;
        };
       
        
        // edit button
        $scope.edit = function () {
            var selectedIndex = $scope.selectIndex;
            if (selectedIndex == null || selectedIndex == undefined) {
                alert('Please Select a Row!');
                return;
            }
            var obj = $scope.items[selectedIndex];
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
            var it = $scope.items;
            if (it[$scope.selectIndex].numBooksIssued == 0) {
                it.splice($scope.selectIndex, 1);
                return;
            };
            $scope.isEditVisible = false;
            $scope.isFormVisible = false;
        };
        
    }]);
})();