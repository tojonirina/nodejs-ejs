let express = require('express');
const ROUTE = express.Router();
let AppController = require('../controllers/AppController');

// Index page route
ROUTE.route('/')
.get(AppController.index)
.post(AppController.post);

// Update status to done
ROUTE.route('/items/:id/done')
.post(AppController.done);


// Export all route
module.exports = ROUTE;