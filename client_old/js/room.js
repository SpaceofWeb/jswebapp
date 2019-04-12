let roomPage = `
	<header>
		<div><a href = "#">HOME</a></div>
		<div><a href = "#">MACROS</a></div>
		<div><a href = "#">DEVICE</a></div>
	</header>
	<hr>
	<div class="card">
		<img src="{{image}}">
		<p class="card-text">{{name}}</p>
	</div>
	<h2>УСТРОЙСТВА</h2>
	<div class="device" id="devices"></div>
`;


let devicesCard = `
<div class="card">
	<img src="{{image}}">
	<p class="card-text">{{name}}</p>
</div>
`;



function initRoom(id) {
	$.ajax({
		url: host + '/rooms/' + id,
		type: 'GET',
		dataType: 'json',
		headers: {'Authorization': `Bearer ${token}`},
		error: err => {
			console.error(err);
		},
		success: data => {
			console.log(data);
		}
	});

	$.ajax({
		url: host + '/rooms/' + id + '/devices',
		type: 'GET',
		dataType: 'json',
		headers: {'Authorization': `Bearer ${token}`},
		error: err => {
			console.error(err);
		},
		success: data => {
			console.log(data);
		}
	});
}



