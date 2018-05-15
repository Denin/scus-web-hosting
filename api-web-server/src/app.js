var express = require('express');
var app = express();
var config = require('../config/config');
var path = require('path');

var pagesPath = __dirname;

console.log(path.join(pagesPath, '../'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../pages/index.html'));
});

app.use('/scripts', express.static(path.join(__dirname, '../pages/scripts')));
app.use('/css', express.static(path.join(__dirname, '../pages/css')));
app.use('/img', express.static(path.join(__dirname, '../pages/img')));

var listener = app.listen(config.web.port, config.web.address, function() {
    console.log('Listening on port: ' + listener.address().port);
});
