var app = angular.module("MyApp", ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when("/", {
			templateUrl: 'home.html'
		})
		.when("/login/", {
			controller: "loginController",
			templateUrl: "login.html"
		})
		.when("/sing-up/", {
			controller: "sinUpController",
			templateUrl: "singUp.html"
		})
		.otherwise({
			redirectTo: "/"
		});
});

app.controller("homeController", function($scope){
});
app.controller("loginController", function($scope){
});
app.controller("sinUpController", function($scope){
});

