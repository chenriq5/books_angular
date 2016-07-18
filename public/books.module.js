(function () {
    angular.module('bookstore', ['ngRoute']).config(function ($routeProvider) {
        $routeProvider
        // route for the home page
            .when('/', {
            templateUrl: 'home.html'
            , controller: 'booksController'
        });
            $routeProvider.when('/api/books', {
             templateUrl: 'home.html'
            , controller: 'booksController'
            });
    });
})();