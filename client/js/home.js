class Home {

	getRooms() {
		$.ajax({
			url: host + '/rooms',
			type: 'GET',
			dataType: 'json',
			headers: {'Authorization': `Bearer ${auth.token}`},
			error: err => console.error(err),
			success: data => {
				console.log('rooms', data);
				this.setRooms(data);
			}
		});
	}


	getDevices() {
		$.ajax({
			url: host + '/rooms/121/devices',
			type: 'GET',
			dataType: 'json',
			headers: {'Authorization': `Bearer ${auth.token}`},
			error: err => console.error(err),
			success: data => {
				console.log('devices:', data);
				this.setDevices(data);
			}
		});
	}


	show() {
		document.cookie = 'page=home';

		$('#content').html(this._template());

		this.getRooms();
		this.getDevices();
	}


	setRooms(data) {
		let html = '';

		for (let d of data) {
			let t = this._tplRoom();

			for (let key in d) {
				t = t.replace(`{{${key}}}`, d[key]);
			}

			html += t;
		}

		$('.rooms').html(html);
	}


	setDevices(data) {
		let html = '';

		for (let d of data) {
			let t = this._tplDevice();

			for (let key in d) {
				t = t.replace(new RegExp(`{{${key}}}`, 'g'), d[key]);
			}

			html += t;
		}

		$('.devices').html(html);
	}



	_template() {
		return `
			<header>
				<ul class="nav">
					<li><a href="#" onclick="home.show();">Главная</a></li>
					<li><a href="devices.html">Устройства</a></li>
					<li>SmartHome</li>
					<li><a href="macros.html">Макросы</a></li>
					<li><a href="#" onclick="auth.logout();">Выход</a></li>
				</ul>
			</header>
			<div class="main">
				<h2>Комнаты</h2>
				<div class="rooms"></div>
				<h2>Устройства</h2>
				<div class="devices"></div>
			</div>
		`;
	}


	_tplRoom() {
		return `
			<div class="wrapper padded-centered">
				<a href="#" id="{{id}}">
					<img class="img centered" src="/client/img/{{photo}}">
					<span>{{name}}</span>
				</a>
			</div>
		`;
	}


	_tplDevice() {
		return `
			<div class="wrapper padded-centered" id="{{id}}">
				<img class="img centered" src="/client/img/dev/{{id}}.jpg">
				<span>{{name}}</span>
			</div>
		`;
	}
}



