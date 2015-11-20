var express = require('express'),
		server  = express();




server.use(express.static('./public'));








	server.listen(3000, function(){
		console.log('listening on port 3000')
	});