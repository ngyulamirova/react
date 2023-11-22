import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Courses } from './components/Courses/Courses';
import { Login } from './components/Login/Login';
import { Registration } from './components/Registration/Registration';
import { CourseInfo } from './components/CourseInfo/CourseInfo';
import { CreateCourse } from './components/CreateCourse/CreateCourse';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<App />}>
				<Route path='registration' element={<Registration />} />
				<Route path='courses' element={<Courses />}>
					<Route path=':courseId' element={<CourseInfo />} />
				</Route>
				<Route path='courses/add' element={<CreateCourse />} />
				<Route path='login' element={<Login />} />
			</Route>
			<Route path='*' element={<Navigate to='/login' />} />
		</Routes>
	</BrowserRouter>
);
