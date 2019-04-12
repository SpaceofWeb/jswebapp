class Room {

	getRoom(id) {
		$.ajax({
			url: host + '/rooms/' + id,
			type: 'GET',
			dataType: 'json',
			headers: {'Authorization': `Bearer ${auth.token}`},
			error: err => console.error(err),
			success: data => {
				console.log('rooms', data);
				this.setRoom(data);
			}
		});
	}


	getDevices(id) {
		$.ajax({
			url: host + '/rooms/' + id + '/devices',
			type: 'GET',
			dataType: 'json',
			headers: {'Authorization': `Bearer ${auth.token}`},
			error: err => console.error(err),
			success: data => {
				console.log('devices:', data);
				this.setDevices(data, id);
			}
		});
	}


	show(id) {
		document.cookie = 'page=home';


		this.getRoom(id);
	}


	setRoom(data, id) {
		let t = this._template();

		for (let key in data) {
			t = t.replace(`{{${key}}}`, data[key]);
		}

		$('#content').html(t);

		this.getDevices(id);
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
					<li><a href="#" onclick="auth.signout();">Выход</a></li>
				</ul>
			</header>
			<div class="main">
				<h2>{{name}}</h2>
				<div class="room">
					<div class="wrapper padded-centered">
						<img class="img centered" src="/client/img/{{photo}}">
					</div>
				</div>
				<h2>Устройства</h2>
				<div class="devices"></div>
			</div>
		`;
	}


	_tplDevice() {
		return `
			<div class="wrapper padded-centered" id="{{id}}">
				<img class="img centered" src="/client/img/dev/{{id}}">
				<span>{{name}}</span>
			</div>
		`;
	}
}



