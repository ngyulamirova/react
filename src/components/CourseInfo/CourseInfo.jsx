import React from 'react';
import { CourseCard } from '../Courses/components/CourseCard/CourseCard';
import { Button } from '../../common/Button/Button';

export const CourseInfo = (props) => (
	<div className='course-info-container'>
		<h2>{props.description}</h2>
		<CourseCard
			key={props.id}
			id={props.id}
			description={props.description}
			author={props.author}
			title={props.title}
			time={props.time}
			date={props.date}
			courseInfo={true}
		/>
		<Button name='BACK' />
	</div>
);
