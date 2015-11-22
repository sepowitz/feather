var app = angular.module('FeatherApp', ['ngAnimate']);

app.controller('WeatherCtrl', ['$http', function($http){
	var self = this;

	self.searchZip = function(ZIP){
		console.log(ZIP)
		$http.get('/' + ZIP).success(function(data){
			weather = data;
			self.temp = weather.main.temp;
		})
	};

}]) 