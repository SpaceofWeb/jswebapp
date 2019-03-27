const config = require('./database');
const mysql = require('mysql');



let db = mysql.createConnection({
	host: config.mysql.host,
	user: config.mysql.user,
	password: config.mysql.password,
	database: config.mysql.dbname
});


db.connect(function(err) {
	if (err) throw err;

	console.log('Mysql connected!');

	db.query('show tables', (err, res) => {
		if (err) throw err;
	});
});



module.exports = db;


