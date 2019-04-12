let host = 'http://localhost:3000/api';
let token = null;


$('#btnLogin').on('click', (e) => {
	$.ajax({
		url: host + '/login',
		type: 'POST',
		dataType: 'text',
		data: {
			login: $('#login').val(),
			password: $('#pass').val(),
		},
		error: err => {
			console.error(err);
		},
		success: data => {
			token = data;
			initHome();
		}
	});
});


