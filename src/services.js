import { getCourseDuration } from './helpers/getCourseDuration';
import { formatCreationDate } from './helpers/formatCreationDate';

export const getAuthors = async () => {
	const response = await fetch('http://localhost:4000/authors/all');
	const data = await response.json();
	if (response.ok) {
		return data.result;
	}
};

export const getCourses = async () => {
	const response = await fetch('http://localhost:4000/courses/all');
	const data = await response.json();
	if (response.ok) {
		const authors = await getAuthors();
		const courses = data.result.map((el) => {
			el.author =
				authors
					.filter((element) => el.authors.includes(element.id))
					.map(({ name }) => name)
					.join(', ') || '';
			el.time = getCourseDuration(el.duration);
			el.date = formatCreationDate(el.creationDate);
			return el;
		});
		return { courses, authors };
	}
};
