export const getErrorsFromResponse = (value) => {
	const result = {
		email: '',
		name: '',
		password: '',
	};
	value.forEach((element) => {
		if (element.includes('email')) {
			result.email = element;
		}
		if (element.includes('name')) {
			result.name = element;
		}
		if (element.includes('password')) {
			result.password = element;
		}
	});
	return result;
};
