var app = angular.module("MyApp", ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when("/", {
			templateUrl: 'index.html',
			controller: 'homeController'
		})
		.when("/login", {
			templateUrl: "/Login.html",
			controller: "loginController"
		})
		.otherwise({reditrectTo: "/"});
});

MyApp.controller("homeController", function($scope){
});
MyApp.controller("loginController", function($scope)){
});

