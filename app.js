const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const expressSession = require('express-session');
const Liquidjs = require('liquidjs');
const flash    = require('connect-flash');
const mongoose = require('mongoose');
const passport = require('passport');

const config = {
	database: require('./config/database'),
};



const port = 3000;
const app = express();

mongoose.connect(config.database.mongoURI, {useNewUrlParser: true})
	.then(() => console.log('Mongodb connected'))
	.catch(err => console.error(err));

require('./config/passport')(passport)


app.engine('liquid', new Liquidjs({
    root: path.resolve(__dirname, 'views/'),
    extname: '.liquid'
}).express());

app.set('view engine', 'liquid');

app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(expressSession({
	secret: 'jswebapp',
	resave: true,
	saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


app.use(express.static(path.join(__dirname, 'public')));

app.use('/auth', require('./app/routes/auth'));



app.get('/', (req, res) => {
	res.send('main teil');
});



app.listen(port, () => {
	console.log(`Server running on port: ${port}`);
});
