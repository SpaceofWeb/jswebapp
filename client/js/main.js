// let host = 'http://localhost:3000/api';
let host = 'http://192.168.1.124:3000/api';
let auth = new Auth;
let home = new Home;
let room = new Room;


let token = /token=(.+?)(;|$)/.exec(document.cookie);
let page = /page=(.+?)(;|$)/.exec(document.cookie);


if (token !== null && token !== '') auth.token = token[1];

if (page !== null && page !== '') page = page[1];

console.log(page);



if (auth.token === null) {
	auth.show();
} else {
	if (page !== null) {

		switch(page) {
			case 'auth': auth.show(); break;
			case 'home': home.show(); break;
			case 'room': room.show(); break;
		}

	} else {
		home.show();
	}
}



function parse(s) {
	let o = {};

	s = s.substr(1);

	let parts = s.split('&');

	for (let p of parts) {
		let bit = p.split('=');

		o[bit[0]] = bit[1];
	}

	console.log(o);
}



parse('?token=213213sadas&page=room&id=1');

