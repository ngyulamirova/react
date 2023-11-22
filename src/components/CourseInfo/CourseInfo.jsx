import React from 'react';
import { CourseCard } from '../Courses/components/CourseCard/CourseCard';
import { Button } from '../../common/Button/Button';
import './CourseInfo.css';
import PropTypes from 'prop-types';

export const CourseInfo = (props) => (
	<div>
		<h2 className='course-info-element'>{props.title}</h2>
		<CourseCard
			key={props.id}
			id={props.id}
			description={props.description}
			author={props.author}
			time={props.time}
			date={props.date}
			courseInfo={true}
		/>
		<span className='course-info-element'>
			<Button name='BACK' onClick={() => props.setSelected(null)} />
		</span>
	</div>
);

CourseInfo.propTypes = {
	id: PropTypes.string,
	description: PropTypes.string,
	author: PropTypes.string,
	time: PropTypes.string,
	date: PropTypes.string,
	title: PropTypes.string,
	setSelected: PropTypes.func,
};
