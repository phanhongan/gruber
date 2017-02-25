var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var app = express();

var google = require('./routes/google');

app.use(bodyParser.json());
app.use(morgan('combined'));

app.use('/google', google);

app.listen(3001, function () {
    console.log('Maps Service listening on port 3001!')
});
