const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const expressSession = require('express-session');
const Liquidjs = require('liquidjs');
const flash    = require('connect-flash');
// const mongoose = require('mongoose');
const mysql = require('mysql');
// const mysqlModel = require('mysql-model');
const passport = require('passport');

const config = {
	db: require('./config/database'),
};



const port = 3000;
const app = express();

// mongoose.connect(config.database.mongoURI, {useNewUrlParser: true})
// 	.then(() => console.log('Mongodb connected'))
// 	.catch(err => console.error(err));


require('./config/passport')(passport)



app.engine('liquid', new Liquidjs({
    root: path.resolve(__dirname, 'views/'),
    extname: '.liquid'
}).express());

app.set('view engine', 'liquid');

app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));


app.use(expressSession({
	secret: 'jswebapp',
	resave: true,
	saveUninitialized: true
}));


app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


app.use('/client', express.static(path.join(__dirname, 'client')))
app.use('/client_old', express.static(path.join(__dirname, 'client_old')))
app.use(express.static(path.join(__dirname, 'public')));




app.use(require('cors')());

app.use('/api/rooms', require('./app/middleware/isLogged'));
app.use('/api/devices', require('./app/middleware/isLogged'));
app.use('/api/macros', require('./app/middleware/isLogged'));


// app.use('/auth', require('./app/routes/auth'));
app.use('/api', require('./app/routes/api/auth'));






app.get('/', (req, res) => {
	res.send('main teil');
});



app.listen(port, () => {
	console.log(`Server running on port: ${port}`);
});
