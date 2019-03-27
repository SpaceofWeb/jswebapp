const local = require('passport-local').Strategy;

const {User, Users} = require('../app/models/mysql/User');
let user = new User();
let users = new Users();



module.exports = function(passport) {

	// passport session setup ==================================================
	passport.serializeUser(function (user, done) {
		done(null, user.id);
	});

	// used to deserialize the user
	passport.deserializeUser(function (id, done) {
		User.findById(id, function (err, user) {
			done(err, user);
		});
	});

	// LOCAL SIGNUP ============================================================
	// passport.use('local-signup', new local({
	// 	usernameField: 'login',
	// 	passwordField: 'password',
	// 	passReqToCallback: true
	// }, (req, login, password, done) => {

	// 	process.nextTick(() => {

	// 		User.findOne({'local.login': login}, (err, user) => {
	// 			if (err) return done(err);

	// 			if (user) {
	// 				return done(null, false, req.flash('signupMessage', 'That login is already taken.'));
	// 			} else {

	// 				let newUser = new User();
	// 				newUser.local.login = login;
	// 				newUser.local.password = newUser.generateHash(password);

	// 				newUser.save(err => {
	// 					if (err) throw err;

	// 					return done(null, newUser);
	// 				});
	// 			}

	// 		});

	// 	});

	// }));

	// LOCAL LOGIN =============================================================
	// passport.use('local-login', new local({
	// 	usernameField: 'login',
	// 	passwordField: 'password',
	// 	passReqToCallback: true
	// }, (req, login, password, done) => {

	// 	User.findOne({'login': login}, (err, user) => {
	// 		if (err) return done(err);

	// 		if (!user)
	// 			return done(null, false, req.flash('loginMessage', 'No user found.'));
			
	// 		if (user.password !== password)
	// 			return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));

	// 		// if (!user.validPassword(password))
	// 		// 	return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
			
	// 			return done(null, user);
	// 	});

	// }));


	// for mysql
	passport.use('local-login', new local({
		usernameField: 'login',
		passwordField: 'password',
		passReqToCallback: true
	}, (req, login, password, done) => {

		users.fetch({where: `login='${login}' AND password='${password}'`, limit: 1}).then(res => {
			console.table(res);

			if (!res)
				return done(null, false, req.flash('loginMessage', 'No user found.'));

			if (res.password !== password)
				return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));

			return done(null, res);
		});

	}));

};

