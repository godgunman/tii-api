var express = require('express');
var app = express();
var Parse = require('node-parse-api').Parse;


var APP_ID = 'y7K3CapPOCqhs5zz3cafXIOX2d30yrV6bUMfsFZo';
var MASTER_KEY = 'lfjaejocphcwrjuWIYjYSejH5lAOsPnjA5Yx0Orc';
var parseApp = new Parse(APP_ID, MASTER_KEY);

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    response.render('pages/index');
});

app.get('/order', function(request, response) {
    parseApp.find('Order', '', function (err, queryResponse) {
        response.json(queryResponse);
    });
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});


