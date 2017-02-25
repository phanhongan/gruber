var express = require('express');
var router = express.Router();

var controller = require('../controllers/google');

router.get('/distanceMatrix', controller.distanceMatrix);

module.exports = router;
