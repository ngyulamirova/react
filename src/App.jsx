import './App.css';
import { Header } from './components/Header/Header';
import { EmptyCourseList } from './components/EmptyCourseList/EmptyCourseList';
import { CourseCard } from './components/Courses/components/CourseCard/CourseCard';
import { mockedAuthorsList, mockedCoursesList } from './constants';
import { getCourseDuration } from './helpers/getCourseDuration';
import { formatCreationDate } from './helpers/formatCreationDate';

const courses = mockedCoursesList.map((el) => {
	el.author =
		mockedAuthorsList
			.filter((element) => el.authors.includes(element.id))
			.map(({ name }) => name)
			.join(', ') || '';
	el.duration = getCourseDuration(el.duration);
	el.creationDate = formatCreationDate(el.creationDate);
	return el;
});

function App() {
	return (
		<div className='app-container'>
			<Header />
			{!courses.length ? (
				<EmptyCourseList />
			) : (
				courses.map(
					({ description, author, title, duration, creationDate, id }) => (
						<CourseCard
							key={id}
							description={description}
							author={author}
							title={title}
							duration={duration}
							creationDate={creationDate}
						/>
					)
				)
			)}
		</div>
	);
}

export default App;
