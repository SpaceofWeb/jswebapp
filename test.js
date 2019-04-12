const r = require('request');

let ended = false;
let users = [];


let count = 0;

let cities = [38];

let group_id = process.argv[2];
// let group_id = '31339996';
// let user_ids = '158975345,1,302792192';



function req(offset) {
	let q = `https://api.vk.com/method/groups.getMembers?group_id=${group_id}
		&fields=city,bdate&offset=${offset}&count=1000&v=API_5.7
		&access_token=4ced8f5d4ced8f5d4ced8f5df44c84448944ced4ced8f5d10478a8bd1308daae11cff13`;


	r(q, (err, res, body) => {

		let d = JSON.parse(body).response;

		if (d) {
			if (d.count > offset) {
				req(offset + 1000);
			} else ended = true;

			segregate(d.users);
		}

	}).on('error', err => {
		throw err;
	});
}


req(0);



// q = `https://api.vk.com/method/users.get?user_ids=${user_ids}&fields=city
// &v=API_5.7
// &access_token=4ced8f5d4ced8f5d4ced8f5df44c84448944ced4ced8f5d10478a8bd1308daae11cff13`;



// r(q, (err, res, body) => {

// 	segregate(JSON.parse(body).response);

// }).on('error', err => {
// 	throw err;
// });



function segregate(data) {
	for (let u of data) {
		for (let c of cities) {
			if (u.city === c) {
				count++;
				console.log(`ID: ${u.uid}; City: ${u.city}; Name: ${u.first_name} ${u.last_name}`);
				users.push(u);
			}
		}
	}

	if (ended) {
		console.log('Count:', count);
		// console.log(users);
	}
}



