import { Input } from '../../common/Input/Input';
import { useState, useRef } from 'react';
import './CreateCourse.css';
import { Button } from '../../common/Button/Button';
import { useNavigate } from 'react-router-dom';
import { AuthorItem } from './components/AuthorItem/AuthorItem';
import { getCourseDuration } from '../../helpers/getCourseDuration';

export const CreateCourse = () => {
	const [titleInput, setTitleInput] = useState('');
	const [durationInput, setDurationInput] = useState('');
	const [authorList, setAuthorList] = useState([]);
	const navigate = useNavigate();
	const [hasError, setError] = useState(false);
	const [authorInput, setAuthorInput] = useState('');
	const textareaRef = useRef(null);
	const goBack = () => {
		navigate('/courses', { replace: true });
	};

	const createCourse = () => {
		const description = textareaRef.current.value;
		if (titleInput && durationInput && description && authorList) {
			const data = {
				title: titleInput,
				description,
				duration: durationInput,
				authors: authorList,
			};
			const url = 'http://localhost:4000/courses/add';
			addCourse(url, JSON.stringify(data));
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
				},
			}).then((response) => {
				console.log(response);
				navigate('/courses', { replace: true });
			});
		} catch (error) {
			setError(true);
		}
	};

	return (
		<div>
			<h1>Course Edit/Create Page</h1>
			<div className='create-course-container'>
				<h2>Main Info</h2>
				<p className='registration-property-name'>Title</p>
				<Input value={titleInput} setValue={setTitleInput} />
				<p className='registration-property-name'>Description</p>
				<textarea ref={textareaRef} className='create-course-textarea' />
				<h2>Duration</h2>
				<div className='create-course-grid'>
					<Input value={durationInput} setValue={setDurationInput} />
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
