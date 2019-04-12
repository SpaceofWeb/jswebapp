const config = require('./database');
const mysql = require('mysql');



let db = mysql.createPool({
	host: config.mysql.host,
	user: config.mysql.user,
	password: config.mysql.password,
	database: config.mysql.dbname,
	queueLimit: 0,
	waitForConnections: true,
	// connectionLimit : 1000,
	// connectTimeout  : 60 * 60 * 1000,
	// acquireTimeout  : 60 * 60 * 1000,
	// timeout         : 60 * 60 * 1000,
});




db.query('select * from user', (err, data) => {
	console.log(err, data);
});


// db.connect(function(err) {
// 	if (err) throw err;

// 	console.log('Mysql connected!');

// 	db.query('show tables', (err1, res) => {
// 		if (err1) throw err1;

// 		console.log(res);
// 	});
// });



module.exports = db;


