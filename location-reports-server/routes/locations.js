var express = require('express');
var router = express.Router();

var controller = require('../controllers/locations');

router.get('/:uid/history', controller.getHistory);

module.exports = router;
