var express = require('express');
var app = express();
var port = 4000;

var middleware = require('./middleware');

app.use(middleware.logger);
// app.get('/', function(req, res){
//     res.send('Hello');
// });
app.get('/about', middleware.requireAuthentication, function(req, res){
    res.send('About Us!.');
});

app.use(express.static(__dirname + '/public'));

app.listen(port, function(){
    console.log('Express started in port', port);
});