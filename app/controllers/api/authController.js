const passport = require('passport');


class AuthController {
	constructor() {}
}



AuthController.prototype.auth = passport.authenticate('local-login');

AuthController.prototype.login = (req, res) => {
	res.status(200).json(req.user);
};



module.exports = new AuthController;
