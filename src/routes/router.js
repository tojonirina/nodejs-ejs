let express = require('express');
const ROUTE = express.Router();
let AppController = require('../controllers/AppController');


ROUTE.route('/')
.get(AppController.index);

module.exports = ROUTE;