import { EmptyCourseList } from '../EmptyCourseList/EmptyCourseList';
import { CourseInfo } from '../CourseInfo/CourseInfo';
import { SearchBar } from './components/SearchBar/SearchBar';
import { CourseCard } from './components/CourseCard/CourseCard';
import { filterElements } from '../../helpers/filterElements';
import { mockedAuthorsList, mockedCoursesList } from '../../constants';
import { getCourseDuration } from '../../helpers/getCourseDuration';
import { formatCreationDate } from '../../helpers/formatCreationDate';
import { Header } from '../Header/Header';
import { useEffect, useState } from 'react';
import './Courses.css';
import { useNavigate } from 'react-router-dom';

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

export const Courses = () => {
	const [selected, setSelected] = useState(null);
	const [searchedValue, setSearchedValue] = useState('');
	const [shownCourses, setShownCourses] = useState(courses);
	const navigate = useNavigate();
	useEffect(
		() =>
			setShownCourses(filterElements(courses, searchedValue, ['title', 'id'])),
		[searchedValue]
	);

	useEffect(() => {
		if (selected?.id) {
			navigate(`courses/${selected.id}`, { replace: false });
		}
	}, [selected]);
	return (
		<div className='courses-container'>
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
};
