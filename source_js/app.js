var app = angular.module('mp3',['ngRoute']);

app.config(function ($routeProvider) {

	$routeProvider
		.when('/home', {
			templateUrl : 'partials/home.html',
			controller: 'homeController'
		})
		.when('/tours', {
			templateUrl : 'partials/tours.html',
			controller: 'toursController'
		})
		.when('/edays', {
			templateUrl : 'partials/edays.html',
			controller: 'edaysController'
		})
		.when('/advocates/', {
			templateUrl : 'partials/advocates.html',
			controller: 'advocatesController'
		})
		.when('/shadow/', {
			templateUrl : 'partials/shadow.html',
			controller: 'shadowController'
		})
		.otherwise({
			redirectTo: '/home'
		});

})
