let homePage = `
<header>
	<div><a href = "#">HOME</a></div>
	<div><a href = "#">MACROS</a></div>
	<div><a href = "#">DEVICE</a></div>
</header>
<hr>
<div class="vector">
	<img src="img/102061.svg">
	<img src="img/25218.svg">
</div>
<div class="room" id="rooms"></div>

<div class="center"><div class="line"></div></div>

<div class="select" id="devices"></div>
`;


let roomCard = `
<div class="card rooms" id="{{id}}">
	<img src="{{image}}">
	<p class="card-text">{{name}}</p>
</div>
`;


let  deviceCard = `
<div class="card">
	<img src="">
	<p class="card-text">датчик</p>
</div>
`;





function initHome() {
	$('#content').html(homePage);

	showRooms();
	// showDevices();
}


function showRooms() {
	$.ajax({
		url: host + '/rooms',
		type: 'GET',
		dataType: 'json',
		headers: {'Authorization': `Bearer ${token}`},
		error: err => {
			console.error(err);
		},
		success: data => {
			console.log(data);

			let html = '';
			for (let r of data) {
				let h = roomCard;
				h = h.replace('{{id}}', r.id);
				h = h.replace('{{image}}', `img/rooms/${r.photo}`);
				h = h.replace('{{name}}', r.name);
				html += h;
			}

			$('#rooms').html(html);

			$('.rooms').on('click', (e) => {
				initRoom(e.currentTarget.id);
			});
		}
	});
}







