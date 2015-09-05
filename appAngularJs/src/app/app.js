var myApp = angular.module('appAngularService',['userModule','ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: './app/views/listUsers.html',
            controller: 'userCrtl'
        })
        .when('/Book/::chapterId', {
            templateUrl: './app/view/detail.html',
            controller: 'detailController'
        }).
        otherwise({
            redirectTo : '/'
        });
}]);

