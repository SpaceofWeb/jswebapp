const passport = require('passport');


class AuthController {
	constructor() {}



	loginForm(req, res) {
		res.render('auth/login', {message: req.flash('loginMessage')});
	}


	signupForm(req, res) {
		res.render('auth/signup');
	}


	logout(req, res) {
		req.logout();
		res.redirect('/');
	}
}



AuthController.prototype.login = passport.authenticate('local-login', {
	successRedirect: '/',
	failureRedirect: '/auth',
	failureFlash: true
});


AuthController.prototype.signup = passport.authenticate('local-signup', {
	successRedirect: '/',
	failureRedirect: '/auth',
	failureFlash: true
});



module.exports = new AuthController;
