let express = require('express');
let app = express();
let routes = require('./routes/router');
const PORT = 8080;

// Set views directory to public/views folder
app.set('views', '../public/views');

// Set views engine to EJS
app.set('view engine', 'ejs');

// Use /asset suffix for all public asset file [css, js, img]
app.use('/asset', express.static('../public/assets'));

// Use json format for all requests response
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Load all routes
app.use(routes);

// Start application on [localhost:PORT]
app.listen(PORT, 'localhost', () => {
    console.log(`Server listen on port ${PORT}`);
});
