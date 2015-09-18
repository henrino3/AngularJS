angular.module('mrPredict', [ 'starter.controllers','ngRoute'])

.run(function($rootScope) {
  $rootScope.hello = function() {
    console.log('hello');
  }
})

.run(['$http', function($http) {
    $http.defaults.headers.common['Authorization'] = 'X-Auth-Token';
}])


.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.headers.common['Authorization'] = 'X-Auth-Token';
}])

.config( function($routeProvider) { 
  $routeProvider
  .when('/', {
    templateUrl: 'templates/login.html',
    controller: 'LoginController'
  })
  .when('/table', {
    templateUrl: 'templates/table.html',
    controller: 'HomeController'
  })
  .when('/about', {
    templateUrl: 'templates/about.html',
    controller: 'AboutController'
  })
  .otherwise({redirectTo:'templates/login.html'})
})
/*
.config( function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
)*/