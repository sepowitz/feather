var app = angular.module('FeatherApp', ['ngRoute', 'ngAnimate']);

app.config(function($routeProvider){
	$routeProvider.when('/', 
		{
			templateUrl: 	'partials/forecast.html',
			controller: 	'WeatherCtrl',
			controllerAs: 'weather'
		})
	});





app.controller('WeatherCtrl', function(){
	var self = this;
	self.message = "Welcome to weather control"
})