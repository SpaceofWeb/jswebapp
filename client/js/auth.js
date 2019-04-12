class Auth {
	constructor() {
		this.token = null;
	}


	signin() {
		$.ajax({
			url: host + '/login',
			type: 'POST',
			data: this.getData(),
			error: err => console.error(err),
			success: data => {
				if (data.err) {
					console.error(data.err);
					return;
				}

				this.token = data;
				document.cookie = `token=${this.token}`;
				home.show();
			}
		});
	}


	logout() {
		document.cookie = 'token=';
		this.show();
	}


	getData() {
		return {
			login: $('#login').val(),
			password: $('#password').val()
		};
	}


	show() {
		document.cookie = 'page=auth';

		let tpl = this._template();

		$('#content').html(tpl);
		$('#btnSignin').on('click', () => this.signin());
	}



	_template() {
		return `
			<form>
				<h1>Smart Home</h1>
				<h3>Ошибка логина или пароля</h3>
				<input type="text" id="login" value="login" placeholder="email">
				<input type="password" id="password" value="pass" placeholder="password">
				<button type="button" id="btnSignin">Login</button>
			</form>
		`;
	}
}