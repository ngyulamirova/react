import './App.css';
import { Header } from './components/Header/Header';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCourseDuration } from './helpers/getCourseDuration';
import { formatCreationDate } from './helpers/formatCreationDate';
import { saveCoursesAction } from './store/courses/actions';
import { saveAuthorsAction } from './store/autors/actions';
import { saveUserAction } from './store/user/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getCourses } from './services';

const selectUser = (state) => state.user;

function App() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [token, setToken] = useState('');

	useEffect(() => {
		setToken(localStorage.getItem('token'));
		navigate(token ? '/courses' : '/login', { replace: true });
	}, []);

	const logout = () => {
		localStorage.removeItem('token');
		dispatch(saveUserAction(''));
		setToken('');
		navigate('/login', { replace: true });
	};

	const getData = async () => {
		const { courses, authors } = await getCourses();
		dispatch(saveCoursesAction(courses));
		dispatch(saveAuthorsAction(authors));
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div className='app-container'>
			<Header
				buttonText={token ? 'LOGOUT' : ''}
				onClick={logout}
				name={useSelector(selectUser).name}
			/>
			<Outlet />
		</div>
	);
}

export default App;
