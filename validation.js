const email = document.getElementById('email');
const country = document.getElementById('country');
const zipcode = document.getElementById('zipcode');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password_confirm');

const inputArray = [email, country, zipcode, password, passwordConfirm];
inputArray.forEach(input => (input.required='true'));

email.addEventListener('input', () => {
	if (email.validity.typeMismatch) {
		email.setCustomValidity(`yo that's not a valid email address`);
	}
	else {
		email.setCustomValidity('');
	}
});

country.addEventListener('input', () => {
	console.log('inside country event listener');
	if (country.value == "") {
		country.setCustomValidity('please select a country');
		country.reportValidity();
	} else {
		country.setCustomValidity('');
	}
});

zipcode.pattern = '[0-9]{5}';
zipcode.addEventListener('input', () => {
	console.log('inside zipcode listener');
	if (zipcode.validity.patternMismatch) {
		zipcode.setCustomValidity('incorrect zipcode format')
	} else {
		zipcode.setCustomValidity('');
	}
})
password.pattern = "^The";
password.addEventListener('input', () => {
	if (password.validity.patternMismatch) {
		password.setCustomValidity('password does not meet requirements');
	} else {
		password.setCustomValidity('');
	}
})

// this seems like a latent security risk but idk lol
passwordConfirm.addEventListener('input', () => {
	if (passwordConfirm.value !== password.value) {
		passwordConfirm.setCustomValidity(`passwords don't match!`)
		passwordConfirm.reportValidity();
	} else {
		passwordConfirm.setCustomValidity('');
	}
})