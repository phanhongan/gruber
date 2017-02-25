var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var app = express();

var locations = require('./routes/locations');

app.use(bodyParser.json());
app.use(morgan('combined'));

app.use('/locations', locations);

app.listen(3002, function () {
    console.log('Location Reports Service listening on port 3002!')
});
