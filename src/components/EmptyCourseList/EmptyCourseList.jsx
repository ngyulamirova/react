import { Button } from '../../common/Button/Button';
import React from 'react';
import './EmptyCourseList.css';

export const EmptyCourseList = () => (
	<div className='empty-course-container'>
		<h3 className='empty-course-title'>Course List is Empty</h3>
		<p className='empty-course-text'>
			'Please use "Add New Course" button to add your first course'
		</p>
		<div className='empty-course-button'>
			<Button name='ADD NEW COURSE' />
		</div>
	</div>
);
