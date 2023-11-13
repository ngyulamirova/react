export const getCourseDuration = (value) => {
	const h = Math.floor(value / 60);
	const m = value - h * 60;
	const text = h === 1 ? ' hour' : ' hours';
	return (h < 10 ? '0' : '') + h + ':' + (m < 10 ? '0' : '') + m + text;
};
