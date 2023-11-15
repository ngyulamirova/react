export const filterElements = (courses, value, propertiesArr) =>
	!value
		? courses
		: courses.filter((element) =>
				propertiesArr.some((property) =>
					element[property].toUpperCase().includes(value.toUpperCase())
				)
		  );
