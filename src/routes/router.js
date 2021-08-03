let express = require('express');
const ROUTE = express.Router();
let AppController = require('../controllers/AppController');

// Index page route
ROUTE.route('/')
.get(AppController.index);


// Export all route
module.exports = ROUTE;