import React from 'react';
import { Button } from '../../../../common/Button/Button';
import './CourseCard.css';

export const CourseCard = (props) => (
	<div className='course-card-container'>
		<h3>{props.title}</h3>
		<div className='course-card-info'>
			<p>{props.description} </p>
			<div>
				<p>
					<span className='course-card-property'>Authors:</span>
					{props.author}
				</p>
				<p>
					<span className='course-card-property'>Duration:</span>
					{props.duration}
				</p>
				<p>
					<span className='course-card-property'>Created:</span>
					{props.creationDate}
				</p>
				<div className='course-card-button-container'>
					<Button name='SHOW COURSE' />
					<Button />
					<Button />
				</div>
			</div>
		</div>
	</div>
);
