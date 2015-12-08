var app = angular.module('FeatherApp', ['ngAnimate']);

app.controller('WeatherCtrl', ['$http', function($http){
	var self = this;
			self.loading = false;
			self.loadAnim = function(param){
				self.loading = param;
			};

	self.searchZip = function(ZIP){
		self.loading = true;
		$('.load-icon').addClass('loading')
		$http.get('/' + ZIP).success(function(data){

			$('.load-icon').empty()
			self.loading = false;
			weather = data;
			console.log(weather)
			
			if(weather.cod == 200 ) {
				if(self.error){
					self.error = '';
				}
				if(weather.main.temp < 0) {
					document.querySelector('.page-wrap').style.backgroundColor = "#73A3FF"
				} else if(weather.main.temp < 20){
					document.querySelector('.page-wrap').style.backgroundColor = "#9CFEFF"
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
				self.city = weather.name;
			} else {
				if(self.temp) {
					document.querySelector('.page-wrap').style.backgroundColor = "";
					self.description = null;
					self.temp = null;
					self.city = null;
				}
				self.error = "Sorry, we could not find what you were looking for. Try again."
			}
	
		})
	};

}]) 