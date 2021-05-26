const Function = ({
	firstname,
	surname,
	email,
	phone,
	type,
	from,
	until,
	message,
}) => {
	let errors = {};

	if (!firstname.trim()) {
		errors.firstname = 'First name required';
	} else if (
		!/^[a-z\u00C0-\u00ff]+(([',. -][a-z\u00C0-\u00ff ])?[a-z\u00C0-\u00ff]*)*$/i.test(
			firstname.trim()
		)
	) {
		errors.firstname = 'Valid first name required';
	}

	if (!surname.trim()) {
		errors.surname = 'Surname required';
	} else if (
		!/^[a-z\u00C0-\u00ff]+(([',. -][a-z\u00C0-\u00ff ])?[a-z\u00C0-\u00ff]*)*$/i.test(
			surname.trim()
		)
	) {
		errors.surname = 'Valid surname required';
	}

	if (!email.trim()) {
		errors.email = 'Email required';
	} else if (
		!/^((".{0,62}")|([^. ]{1,64}))(\.((".+")|([^. ]+))){0,32}@[^. ]+(\.[^. ]{1,253}){0,127}$/i.test(
			email
		)
	) {
		errors.email = 'Email invalid';
	}

	phone = phone.replace(/\D/g, '');
	if (!phone) {
		errors.phone = 'Phone required';
	} else if (
		!/^((((6[14]0?)|0)[0-9])?(\d{8})|((640?|0))(\d{6,8}))$/.test(phone)
	) {
		errors.phone = 'Phone invalid';
	}

	if (!type.trim()) {
		errors.type = 'Please select an option';
	}

	const now = new Date();
	const inAWeek = new Date().setDate(new Date().getDate() + 7);
	const startDate = new Date(from).setDate(new Date(from).getDate());

	if (!from.trim()) {
		errors.from = 'Please select a start date';
	} else if (now > startDate) {
		errors.from = 'Please select a valid start date';
	} else if (inAWeek > startDate) {
		errors.from = '7 days notice required';
	}

	if (type === 'Suspend') {
		const endDate = new Date(until).setDate(new Date(until).getDate());
		const minEndDate = new Date(from).setDate(new Date(from).getDate() + 7);
		const maxEndDate = new Date(from).setDate(new Date(from).getDate() + 90);
		if (!until) {
			errors.until = 'Please select an end date';
		} else if (startDate > endDate || now > endDate) {
			errors.until = 'Please select a valid end date';
		} else if (minEndDate > endDate) {
			errors.until = 'Minimum suspension is 1 week';
		} else if (endDate > maxEndDate) {
			errors.until = 'Maximum suspension is 3 months';
		}
	}

	if (!message.trim()) {
		errors.message = 'Message required';
	}

	return errors;
};
export default Function;