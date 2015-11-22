var express 		= require('express'),
		dotenv 			= require('dotenv'),
		bodyParser 	= require('body-parser'),
		http				= require('http'),
		server  		= express();



//Ensure access to API key
dotenv.load();

//Render public files
server.use(express.static('./public'));







//Establish server connection
server.listen(3000, function(){
	console.log('listening on port 3000')
	console.log(process.env.OW_API);
});