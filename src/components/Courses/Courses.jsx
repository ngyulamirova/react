import { EmptyCourseList } from '../EmptyCourseList/EmptyCourseList';
import { CourseInfo } from '../CourseInfo/CourseInfo';
import { SearchBar } from './components/SearchBar/SearchBar';
import { CourseCard } from './components/CourseCard/CourseCard';
import { filterElements } from '../../helpers/filterElements';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import './Courses.css';
import { useNavigate } from 'react-router-dom';
import { deleteCoursesAction } from '../../store/courses/actions';

const selectCourses = (state) => state.courses;

export const Courses = () => {
	const [selected, setSelected] = useState(null);
	const [searchedValue, setSearchedValue] = useState('');
	const [shownCourses, setShownCourses] = useState([]);
	const navigate = useNavigate();
	const allCourses = useSelector(selectCourses);
	const dispatch = useDispatch();

	const deleteCourse = (id) => {
		dispatch(deleteCoursesAction(id));
	};

	useEffect(() => {}, [allCourses]);

	useEffect(
		() =>
			setShownCourses(
				filterElements(allCourses, searchedValue, ['title', 'id'])
			),
		[searchedValue, useSelector(selectCourses).length]
	);

	useEffect(() => {
		if (selected?.id) {
			navigate(`/courses/${selected.id}`, { replace: false });
		} else {
			navigate('/courses', { replace: false });
		}
	}, [selected]);
	return (
		<div>
			{!useSelector(selectCourses).length ? (
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
							deleteCourse={(id) => deleteCourse(id)}
						/>
					))}
				</div>
			)}
		</div>
	);
};
