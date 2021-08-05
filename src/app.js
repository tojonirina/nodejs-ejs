require('dotenv').config();
let express = require('express');
let app = express();
let routes = require('./routes/router');

// Set views directory to public/views folder
app.set('views', __dirname + '/public/views');

// Set views engine to EJS
app.set('view engine', 'ejs');

// Use /asset suffix for all public asset file [css, js, img]
app.use('/asset', express.static(__dirname + '/public/assets'));

// Use json format for all requests response
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Load all routes
app.use(routes);

const PORT = process.env.NODEJS_LOCAL_PORT || 3000;
// Start application on [localhost:PORT]
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listen on port ${PORT} , process : ${process.pid}`);
});
