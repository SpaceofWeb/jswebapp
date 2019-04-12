const express = require('express');
// const passport = require('passport');
const router = express.Router();

const authController = require('../controllers/authController');
const User = require('../models/User');



router.get('/', authController.loginForm);
router.post('/', authController.login);

router.get('/signup', authController.signupForm);
router.post('/signup', authController.signup);

router.get('/logout', authController.logout);




module.exports = router;
