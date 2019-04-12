let devices = [];



$.ajax({
	url: 'http://192.168.1.124:3000/api/rooms',
	type: 'GET',
	dataType: 'json',
	headers: {'Authorization': 'Bearer $2b$08$zX5YbtLfYZGDBt95Ct2NguPNd'},
	error: err => {console.error(err);},
	success: data => {
		let k = 0, l = 0;

		for (let i = 0; i < 5; i++) {
			k++;

			getDevices(data[i].id, arr => {
				devices = devices.concat(arr);

				l++;
				if (k === l) addDevice();
			});
		}
	}
});



function getDevices(rid, cb) {
	$.ajax({
		url: `http://localhost:3000/api/rooms/${rid}/devices`,
		type: 'GET',
		dataType: 'json',
		error: err => {console.error(err);},
		success: data => {
			cb(data);
		}
	});
}



function addDevice() {
	let p = `<option value="{{id}}">{{name}}</option>`;
	let opts = '';

	for (let d of devices) {
		let q = p;
		q = q.replace('{{id}}', d.id);
		q = q.replace('{{name}}', d.name);
		opts += q;
	}


	let d = devices[0];
	let value = genInput(d);

	$('#devices').append(`
		<div>
			<select name="device" onchange="changeInput(this)">${opts}</select>
			<div class="input">${value}</div>
			<button type="button" 
				onclick="$(this).parent().remove();">X</button><br>
		</div>
	`);
}



function genInput(d) {
	switch(d.value) {
		case 'on':
		case 'open':
			return `<input type="checkbox" name="value"
							onclick="changeInputValue(this);" 
							value="${d.value}" checked>`;
			break;
		case 'off':
		case 'close':
			return `<input type="checkbox" name="value" 
							onclick="changeInputValue(this);" 
							value="${d.value}">`;
			break;
		default:
			return `<input type="number" name="value" 
							value="${d.value}">`;
	}
}



function changeInputValue(input) {
	let i = $(input);
	let v = i.val();

	if (v === 'on') i.val('off');
	else if (v === 'off') i.val('on');
	else if (v === 'open') i.val('close');
	else if (v === 'close') i.val('open');
}



function changeInput(select) {
	let did = parseInt($(select).val());

	let device;

	for (let d of devices) {
		if (d.id === did) {
			device = d;
			break;
		}
	}

	let input = $(select).parent().children('.input');

	input.html(genInput(device));
}



function addMacros() {
	let data = {
		name: $('#macros').val(),
		devices: []
	};

	$('#devices>div').map(function() {
		data.devices.push({
			id: parseInt($(this).children('select').val()),
			value: $(this).children('.input').children('input').val()
		});
	});

	console.log(data);
	$('#form')[0].reset();
	$('#devices').html('');
	addDevice();
}





// let ids = '158975345';



// $.ajax({
// 	url: `http://api.vk.com/users.get?user_ids=${ids}&fields=city`,
// 	error: err => {
// 		console.error(err);
// 	},
// 	success: data => {
// 		console.log(data);
// 	}
// });

