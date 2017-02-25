var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var requireDir = require('require-dir');

var config = require('./config/db');

mongoose.connect(config.mongodb);
requireDir('./models/');

var drivers = require('./routes/drivers');
var passengers = require('./routes/passengers');
var requests = require('./routes/requests');

var app = express();
app.use(bodyParser.json());
app.use(morgan('combined'));

app.use('/drivers', drivers);
app.use('/passengers', passengers);
app.use('/requests', requests);

app.listen(3000, function () {
    console.log('Gruber API listening on port 3000!')
});
