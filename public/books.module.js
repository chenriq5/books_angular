(function(){
    console.log('loading module')
    angular.module('bookstore', ['ngRoute'])
    
    .config(function($routeProvider) {
        console.log('config routes');
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'home.html',
                controller  : 'booksController'
            });

         
    });
})();