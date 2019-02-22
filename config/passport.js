const local = require('passport-local').Strategy;

const User = require('../app/models/User');


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
	passport.use('local-signup', new local({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	}, (req, email, password, done) => {

		process.nextTick(() => {

			User.findOne({'local.email': email}, (err, user) => {
				if (err) return done(err);

				if (user) {
					return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
				} else {

					let newUser = new User();
					newUser.local.email = email;
					newUser.local.password = newUser.generateHash(password);

					newUser.save(err => {
						if (err) throw err;

						return done(null, newUser);
					});
				}

			});

		});

	}));

	// LOCAL LOGIN =============================================================
	passport.use('local-login', new local({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	}, (req, email, password, done) => {

		User.findOne({'local.email': email}, (err, user) => {
			if (err) return done(err);

			if (!user)
				return done(null, false, req.flash('loginMessage', 'No user found.'));
			
			if (!user.validPassword(password))
				return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
			
				return done(null, user);
		});

	}));

};

