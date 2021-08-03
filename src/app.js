let express = require('express');
let app = express();
let routes = require('./routes/router');
const PORT = 8080;

app.set('views', '../public/views');
app.set('view engine', 'ejs');

app.use('/asset', express.static('../public/assets'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(PORT, 'localhost', () => {
    console.log(`Server listen on port ${PORT}`);
});
