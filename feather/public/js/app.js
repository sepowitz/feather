var app = angular.module('FeatherApp', ['ngAnimate']);

app.controller('WeatherCtrl', ['$http', function($http){
	var self = this;

	self.searchZip = function(ZIP){
		$http.get('/' + ZIP).success(function(data){
			weather = data;
			console.log(weather)
			if(weather.cod == 200 ) {
				$('.forecast-container').clear();
				if(weather.main.temp < 0) {
					document.querySelector('.page-wrap').style.backgroundColor = "#73A3FF"
				} else if(weather.main.temp < 20){
					document.querySelector('.page-wrap').style.backgroundColor = "#F5FFFF"
				} else if(weather.main.temp < 50){
					document.querySelector('.page-wrap').style.backgroundColor = "#5AFFB4"
				} else if(weather.main.temp < 70){
					document.querySelector('.page-wrap').style.backgroundColor = "#C5FF5A"
				} else if(weather.main.temp < 90){
					document.querySelector('.page-wrap').style.backgroundColor = "#FFE65A"
				} else if(weather.main.temp >= 100){
					document.querySelector('.page-wrap').style.backgroundColor = "#FF4F00"
				}
				self.description = weather.weather[0].description;
				self.temp = Math.round(weather.main.temp);
			} else {
				var el = document.querySelector('.forecast-container'),
						elNino = document.createElement('h1');
						elNino.innerHTML = 'Sorry, we could not find what you were looking for. Try again.';
						el.appendChild(elNino);
			}
	
		})
	};

}]) 