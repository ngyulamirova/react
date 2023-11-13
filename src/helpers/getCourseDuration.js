export const getCourseDuration = (value) => {
	const h = Math.floor(value / 60);
	const m = value - h * 60;
	const text = h === 1 ? ' hour' : ' hours';
	const hours = (h < 10 ? '0' : '') + h;
	const minutes = (m < 10 ? '0' : '') + m;
	return hours + ':' + minutes + text;
};
