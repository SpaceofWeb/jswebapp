const db = require('../../../config/mysqlConnect');
const mysqlBackbone = require('mysql-backbone');


let User = mysqlBackbone.Model.extend({
	connection: db,
	tableName: 'user'
});


let Users = mysqlBackbone.Collection.extend({
	model: User,
	connection: db,
	tableName: "movies",
});



module.exports = {db, User, Users};
