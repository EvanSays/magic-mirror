var express = require('express');
var router = express.Router();
var controller = require('./controller');

router.get('/places', controller.getPlaces)

module.exports = router;
