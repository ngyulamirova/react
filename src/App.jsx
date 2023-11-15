import './App.css';
import { Header } from './components/Header/Header';
import { EmptyCourseList } from './components/EmptyCourseList/EmptyCourseList';
import { CourseCard } from './components/Courses/components/CourseCard/CourseCard';
import { mockedAuthorsList, mockedCoursesList } from './constants';
import { getCourseDuration } from './helpers/getCourseDuration';
import { formatCreationDate } from './helpers/formatCreationDate';
import { useEffect, useState } from 'react';
import { CourseInfo } from './components/CourseInfo/CourseInfo';
import { SearchBar } from './components/Courses/components/SearchBar/SearchBar';
import { filterElements } from './helpers/filterElements';

const courses = mockedCoursesList.map((el) => {
	el.author =
		mockedAuthorsList
			.filter((element) => el.authors.includes(element.id))
			.map(({ name }) => name)
			.join(', ') || '';
	el.time = getCourseDuration(el.duration);
	el.date = formatCreationDate(el.creationDate);
	return el;
});

function App() {
	const [selected, setSelected] = useState(null);
	const [searchedValue, setSearchedValue] = useState('');
	const [shownCourses, setShownCourses] = useState(courses);
	useEffect(
		() =>
			setShownCourses(filterElements(courses, searchedValue, ['title', 'id'])),
		[searchedValue]
	);

	return (
		<div className='app-container'>
			<Header />
			{!courses.length ? (
				<EmptyCourseList />
			) : selected ? (
				<CourseInfo
					key={selected.id}
					id={selected.id}
					description={selected.description}
					author={selected.author}
					title={selected.title}
					time={selected.time}
					date={selected.date}
					setSelected={setSelected}
				/>
			) : (
				<div>
					<SearchBar search={setSearchedValue} />
					{shownCourses.map((props) => (
						<CourseCard
							key={props.id}
							id={props.id}
							description={props.description}
							author={props.author}
							title={props.title}
							time={props.time}
							date={props.date}
							courseInfo={false}
							setSelected={setSelected}
						/>
					))}
				</div>
			)}
		</div>
	);
}

export default App;
