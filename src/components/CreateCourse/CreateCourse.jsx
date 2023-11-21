import { Input } from '../../common/Input/Input';
import { useState } from 'react';
import './CreateCourse.css';
import { Button } from '../../common/Button/Button';
import { Header } from '../Header/Header';

export const CreateCourse = () => {
	const [titleInput, setTitleInput] = useState('');
	const [descriptionInput, setDescriptionInput] = useState('');
	const [durationInput, setDurationInput] = useState('');
	const [authorInput, setAuthorInput] = useState('');
	return (
		<div className='container'>
			<Header hasNoButton={true} />
			<h1>Course Edit/Create Page</h1>
			<div class='create-course-container'>
				<h2>Main Info</h2>
				<p className='registration-property-name'>Title</p>
				<Input value={titleInput} setValue={setTitleInput} />
				<p className='registration-property-name'>Description</p>
				<textarea
					value={descriptionInput}
					setValue={setDescriptionInput}
					class='create-course-textarea'
				/>
				<h2>Duration</h2>
				<div className='create-course-grid'>
					<Input value={durationInput} setValue={setDurationInput} />
					<span>00:00 hours</span>
				</div>
				<div className='create-course-grid'>
					<div>
						<h2>Authors</h2>
						<div className='create-course-grid'>
							<div>
								<p>Author Name</p>
								<Input value={authorInput} setValue={setAuthorInput} />
							</div>
							<Button name='CREATE AUTHOR' />
						</div>
					</div>
					<div>
						<h2>Course Authors</h2>
						<p>Author list is empty</p>
					</div>
				</div>
				<h3>AuthorList</h3>
				<h4>Author One</h4>
				<h4>Author Two</h4>
			</div>
		</div>
	);
};
