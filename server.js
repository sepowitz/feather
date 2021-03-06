var express 		= require('express'),
		dotenv 			= require('dotenv'),
		bodyParser 	= require('body-parser'),
		http				= require('http'),
		PORT        = process.env.PORT || 3000,
		server  		= express();



//Secure access to API key
dotenv.load();

//Render public files
server.use(express.static('./public'));


//Get data by ZIPCODE
server.get('/:zip', function(req, res){
	var ZIP = req.params.zip;
	http.get('http://api.openweathermap.org/data/2.5/weather?zip=' + ZIP + ',us&units=imperial&APPID=' + process.env.OW_API, function(data){
		data.on('data', function(data){
			var dataString = data.toString();
			res.send(dataString);
		});
	});
});



//Establish server connection
server.listen(PORT, function(){
	console.log('listening on port ' + PORT)
});