var express = require('express');
var app = express();
var config = require('../config/config');
var path = require('path');
const api = require('./common/api');
const url = require('url');
const log = require('./common/log.js');

var pagesPath = __dirname;

console.log(path.join(pagesPath, '../'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../pages/index.html'));
});

app.use('/scripts', express.static(path.join(__dirname, '../pages/scripts')));
app.use('/css', express.static(path.join(__dirname, '../pages/css')));
app.use('/img', express.static(path.join(__dirname, '../pages/img')));

app.get('/callApi', function(req, res) {
    api.get(url.resolve(config.api.apiUri, 'site/' + config.api.siteId), function (err, result) {
        if (err) {
            done(err);
            console.log(err);
            return;
        }
        else {
            console.log(result.content);
            res.send(result.content);
        }
    })
});

app.get('/apiGetBusinessHours', function(req, res) {
    api.get(url.resolve(config.api.apiUri, 'site/' + config.api.siteId + '/configuration/business')
    , function (err, result) {
        if (err) {
            done(err);
            console.log(err);
            return;
        }
        else {
            var jsBusHours = result.content.opening_hours;
            console.log(jsBusHours);
            res.send(jsBusHours);
        }
    })
});

var listener = app.listen(config.web.port, config.web.address, function() {
    console.log('Listening on port: ' + listener.address().port);
    
});
