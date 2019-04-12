const {db} = require('../models/mysql/User');


module.exports = function (req, res, next) {
	// if (req.isAuthenticated()) return next();

	let token = req.headers.authorization;
	if (token) token = token.substring(7);

	let q = `select * from user where token='${token}'`;
	db.query(q, (err, result) => {
		if (err) throw err;

		if (result && result.length > 0) return next();

		res.status(401).json({});
	});
};