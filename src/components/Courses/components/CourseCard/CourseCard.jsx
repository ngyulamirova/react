import React from 'react';
import { Button } from '../../../../common/Button/Button';
import './CourseCard.css';

export const CourseCard = (props) => (
	<div
		className={
			props.courseInfo ? 'course-card-info-container' : 'course-card-container'
		}
	>
		<h3>{props.courseInfo ? 'Description' : props.title}</h3>
		<div className='course-card-info'>
			<p>{props.description} </p>
			<div className={props.courseInfo ? 'course-card-border' : ''} />
			<div>
				{props.courseInfo ? (
					<p>
						<span className='course-card-property'>ID:</span>
						{props.id}
					</p>
				) : (
					<p>
						<span className='course-card-property'>Authors:</span>
						{props.author}
					</p>
				)}
				<p>
					<span className='course-card-property'>Duration:</span>
					{props.time}
				</p>
				<p>
					<span className='course-card-property'>Created:</span>
					{props.date}
				</p>
				{props.courseInfo ? (
					<p>
						<span className='course-card-property'>Created:</span>
						{props.author}
					</p>
				) : (
					<div className='course-card-button-container'>
						<Button
							name='SHOW COURSE'
							onClick={() => props.setSelected(props)}
						/>
						<Button icon='bin' />
						<Button icon='edit' />
					</div>
				)}
			</div>
		</div>
	</div>
);
