const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

const authController = require('../../controllers/api/authController');
const {db, User, Users} = require('../../models/mysql/User');

let users = new Users;



// userSchema.methods.generateHash = password => {
// 	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };

// userSchema.methods.validPassword = function(password) {
// 	return bcrypt.compareSync(password, this.local.password);
// };

// router.post('/login', authController.auth, authController.login);





// AUTH
router.post('/login', (req, res) => {
	// console.log(req.body);

	if (req.body.login === '' || req.body.password === '') {
		res.status(401).json({err: 'Login or password not passed'});
		return;
	}

	let h = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8), null);
	h = h.substr(0, 32);

	let q = `select * from user where login='${req.body.login}' 
							AND password='${req.body.password}' limit 1`;
	db.query(q, (err, res1) => {
		if (err) throw err;

		// console.log('get user:', res1);
		if (res1 && res1[0] && res1[0].id) {
			let q = `update user set token='${h}' where id='${res1[0].id}'`;
			db.query(q, (err1, res2, fields) => {
				if (err1) throw err1;

				if (res2.changedRows === 1) res.status(200).send(h);
				else res.status(401).json({});
			});
		} else {
			res.status(401).json({err: 'Login or password incorrect'});
		}
	});

});


// GET ROOMS
router.get('/rooms', (req, res) => {
	let q = `select * from room`;
	db.query(q, (err, result) => {
		if (err) throw err;

		res.status(200).json(result);
	});
});


// GET ROOM
router.get('/rooms/:id', (req, res) => {
	let q = `select * from room where id='${req.params.id}'`;
	db.query(q, (err, result) => {
		if (err) throw err;

		res.status(200).json(result[0]);
	});
});


// GET DEVICES
router.get('/rooms/:id/devices', (req, res) => {
	let q = `select * from device where room_id='${req.params.id}'`;
	db.query(q, (err, result) => {
		if (err) throw err;

		res.status(200).json(result);
	});
});


// GET DEVICE
router.get('/devices/:id', (req, res) => {
	let q = `select * from device where id='${req.params.id}' limit 1`;
	db.query(q, (err, result) => {
		if (err) throw err;

		console.log(result[0]);
		res.status(200).json(result[0]);
	});
});


// UPDATE DEVICE
router.patch('/devices/:id', (req, res) => {
	let q = `update device set value='${req.body.value}' where id='${req.params.id}'`;
	db.query(q, (err, result) => {
		if (err) throw err;

		res.status(200).json({});
	});
});


// GET MACROS
router.get('/macros', (req, res) => {
	let q = `select * from macro`;
	db.query(q, (err, result) => {
		if (err) throw err;

		res.status(200).json(result);
	});
});


// DELETE MACROS
router.delete('/macros/:id', (req, res) => {
	let q = `delete from macro where id='${req.params.id}'`;
	db.query(q, (err, result) => {
		if (err) throw err;

		res.status(200).json({});
	});
});


// CREATE MACROS
router.post('/macros', (req, res) => {
	let q = `insert into macro (name, user_id) values('${req.body.name}', 42)`;
	db.query(q, (err, result) => {
		if (err) throw err;

		let vals = '';
		for (let i of req.body.devices) {
			vals += `(${result.insertId}, ${i.id}, '${i.value}'),`;
		}

		vals = vals.slice(0, -1);
		q = `insert into action (macro_id, device_id, value) 
				values ${vals}`;
		db.query(q, (err1, result2) => {
			if (err1) throw err1;

			res.status(200).json({});
		});
	});
});




module.exports = router;
