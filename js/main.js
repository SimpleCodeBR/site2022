AOS.init();

/*
let token = '';

function onRecaptchaSuccess(response) {
	token = response;
	document.querySelector('#recaptcha').textContent = '';
}

const isRequired = (value) => (value == '' ? false : true);

const isEmailValid = (email, message) => {
	const re =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const test = re.test(email.value.trim());

	if (!test) {
		showError(email, message);
	} else {
		showSuccess(email);
	}

	return test;
};

const showError = (input, message) => {
	input.classList.add('error');

	const formField = input.parentElement;
	const error = formField.querySelector('small');
	error.textContent = message;
};

const showSuccess = (input) => {
	input.classList.remove('error');

	const formField = input.parentElement;
	const error = formField.querySelector('small');
	error.textContent = '';
};

const checkRequired = (field, message) => {
	let valid;

	if (!isRequired(field.value.trim())) {
		showError(field, message);
		valid = false;
	} else {
		showSuccess(field);
		valid = true;
	}

	return valid;
};

const checkName = () => {
	const name = document.querySelector('#nome');
	return checkRequired(name, 'Seu nome precisa ser informado');
};

const checkCompany = () => {
	const company = document.querySelector('#empresa');
	return checkRequired(company, 'O nome da empresa precisa ser informado');
};

const checkEmail = () => {
	const email = document.querySelector('#email');
	return (
		checkRequired(email, 'Um e-mail válido precisa ser informado') &&
		isEmailValid(email, 'Um e-mail válido precisa ser informado')
	);
};

const checkIdea = () => {
	const idea = document.querySelector('#ideia');
	return checkRequired(idea, 'Conte-nos um resumo de sua ideia');
};

const checkToken = () => {
	let valid;
	let recaptcha = document.querySelector('#recaptcha');

	if (token == '') {
		recaptcha.textContent = 'Captcha não válido, tente novamente';
		valid = false;
	} else {
		recaptcha.textContent = '';
		valid = true;
	}

	return valid;
};

async function onSend() {
	let nameValid = checkName(),
		emailValid = checkEmail(),
		companyValid = checkCompany(),
		ideaValid = checkIdea(),
		tokenValid = checkToken();

	let formValid =
		nameValid && emailValid && companyValid && ideaValid && tokenValid;

	if (formValid) {
		const name = document.querySelector('#nome').value;
		const email = document.querySelector('#email').value;
		const company = document.querySelector('#empresa').value;
		const idea = document.querySelector('#ideia').value;
		const proposal = document.querySelector('#orcamento').checked;
		const button = document.querySelector('#enviar');

		button.textContent = 'Enviando...';

		const faleconosco = {
			Nome: name,
			Email: email,
			Empresa: company,
			Ideia: idea,
			Orcamento: proposal,
			Token: token,
		};

		// produção
		const url = 'https://apisimplecode.azurewebsites.net/faleconosco';
		// dev
		// const url = 'https://localhost:7244/FaleConosco';
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(faleconosco),
		});

		const status = response.status;

		if (status == 200) {
			document.querySelector('#nome').value = '';
			document.querySelector('#email').value = '';
			document.querySelector('#empresa').value = '';
			document.querySelector('#ideia').value = '';
			document.querySelector('#caracteres').textContent = 0;
			document.querySelector('#orcamento').checked = false;

			if (window.grecaptcha) grecaptcha.reset();

			button.textContent = 'Enviar mensagem';
			document.querySelector('.success').classList.remove('hide');
		}
	}
}

document.querySelectorAll('input').forEach((el) => {
	el.addEventListener('blur', function () {
		switch (this.id) {
			case 'nome':
				if (!checkName()) {
					this.focus();
				}
				break;
			case 'email':
				if (!checkEmail()) {
					this.focus();
				}
				break;
			case 'empresa':
				if (!checkCompany()) {
					this.focus();
				}
				break;
		}
	});
});

document.querySelector('textarea').addEventListener('blur', function () {
	if (!checkIdea()) {
		this.focus();
	}
});

document.querySelector('textarea').addEventListener('keyup', function () {
	let characterCount = this.value.length,
		current = document.querySelector('#caracteres');

	current.textContent = characterCount;
});
*/

function abrirMenu() {
	document.querySelector('.navegacao').classList.remove('hide');
	document.querySelector('.redes-sociais').classList.remove('hide');
	document.querySelector('.close').classList.remove('hide');
}

function fecharMenu() {
	if (window.innerWidth < 1080) {
		document.querySelector('.navegacao').classList.add('hide');
		document.querySelector('.redes-sociais').classList.add('hide');
		document.querySelector('.close').classList.add('hide');
	}
}

window.onresize = checkMenu;

function checkMenu() {
	if (window.innerWidth > 1080) {
		abrirMenu();
	} else {
		fecharMenu();
	}
}

function aceitarCookies() {
	localStorage.setItem('cookies', '1');
	document.querySelector('.cookies').classList.add('hide');
}

(function exibirCookies() {
	let alias = 'cookies';
	let cookies;

	if (localStorage.getItem(alias) != null) {
		cookies = parseInt(localStorage.getItem(alias));
		if (cookies == 1) {
			document.querySelector('.cookies').classList.add('hide');
		}
	}
})();

fecharMenu();
