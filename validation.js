const email = document.getElementById('email');
const country = document.getElementById('country');
const zipcode = document.getElementById('zipcode');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password_confirm');

email.addEventListener('input', () => {
	if (email.validity.typeMismatch) {
		email.setCustomValidity(`ayo that's not a valid email address`);
	}
	else {
		email.setCustomValidity('');
	}
});

country.pattern = '/^$/'
country.addEventListener('input', () => {
	console.log('inside country event listener');
	if (country.value == "") {
		country.setCustomValidity('please select a country')
		country.reportValidity();
	}
});