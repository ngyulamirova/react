export const getErrorsFromResponse = (value, properties) => {
	const result = {};
	value.forEach((element) => {
		properties.forEach((property) => {
			if (element.includes(property)) {
				result[property] = element;
			}
		});
	});
	return result;
};
