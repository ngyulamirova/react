import { Input } from '../../common/Input/Input';
import { useState, useRef } from 'react';
import './CreateCourse.css';
import { Button } from '../../common/Button/Button';
import { useNavigate } from 'react-router-dom';
import { AuthorItem } from './components/AuthorItem/AuthorItem';
import { getCourseDuration } from '../../helpers/getCourseDuration';
import { getErrorsFromResponse } from '../../helpers/getErrorsFromResponce';

export const CreateCourse = () => {
	const [titleInput, setTitleInput] = useState('');
	const [durationInput, setDurationInput] = useState('');
	const [authorList, setAuthorList] = useState(['author']);
	const navigate = useNavigate();
	const [errors, setErrors] = useState(false);
	const [authorInput, setAuthorInput] = useState('');
	const textareaRef = useRef(null);
	const properties = ['title', 'duration', 'description'];
	const goBack = () => {
		navigate('/courses', { replace: true });
	};

	const createCourse = () => {
		const description = textareaRef.current.value;
		if (titleInput && durationInput && description && authorList.length) {
			const data = {
				title: titleInput,
				description,
				duration: +durationInput,
				authors: authorList,
			};
			const url = 'http://localhost:4000/courses/add';
			addCourse(url, data);
		}
	};

	const deleteAuthor = (title) => {
		setAuthorList(authorList.filter((author) => author !== title));
	};

	const addAuthor = () => {
		setAuthorList([...authorList, authorInput]);
		setAuthorInput('');
	};

	const addCourse = async (url, jsonData) => {
		try {
			await fetch(url, {
				method: 'POST',
				body: JSON.stringify(jsonData),
				headers: {
					'Content-Type': 'application/json',
					accept: '*/*',
				},
			}).then((response) => {
				if (response.ok) {
					navigate('/courses', { replace: true });
				} else {
					response.json().then((json) => {
						setErrors(
							json.errors ? getErrorsFromResponse(json.errors, properties) : {}
						);
					});
					return response.error;
				}
			});
		} catch (error) {}
	};

	return (
		<div>
			<h1>Course Edit/Create Page</h1>
			<div className='create-course-container'>
				<h2>Main Info</h2>
				<p className='registration-property-name'>Title</p>
				<Input
					value={titleInput}
					setValue={setTitleInput}
					error={errors.title}
				/>
				<p className='registration-property-name'>Description</p>
				<textarea ref={textareaRef} className='create-course-textarea' />
				{errors.description ? (
					<p className='error-text'>{errors.description}</p>
				) : null}
				<h2>Duration</h2>
				<div className='create-course-grid'>
					<Input
						type='number'
						value={durationInput}
						setValue={setDurationInput}
						error={errors.duration}
					/>
					<span>{getCourseDuration(durationInput)}</span>
				</div>
				<div className='create-course-grid'>
					<div>
						<h2>Authors</h2>
						<div className='create-course-grid'>
							<div>
								<p>Author Name</p>
								<Input value={authorInput} setValue={setAuthorInput} />
							</div>
							<Button name='CREATE AUTHOR' onClick={addAuthor} />
						</div>
					</div>
					<div>
						<h2>Course Authors</h2>
						<p>Author list is empty</p>
					</div>
				</div>
				<h3>AuthorList</h3>
				{authorList.map((author) => (
					<AuthorItem title={author} onClick={() => deleteAuthor(author)} />
				))}
			</div>
			<div className='create-course-buttons-container'>
				<Button name='CANSEL' onClick={goBack} />
				<Button name='CREATE COURSE' onClick={createCourse} />
			</div>
		</div>
	);
};
