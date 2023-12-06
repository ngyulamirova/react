import { Input } from '../../common/Input/Input';
import { Button } from '../../common/Button/Button';
import './Registration.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { getErrorsFromResponse } from '../../helpers/getErrorsFromResponce';

export const Registration = (props) => {
	const [emailInput, setEmailInput] = useState('');
	const [nameInput, setNameInput] = useState('');
	const [passwordInput, setPasswordInput] = useState('');
	const [errors, setErrors] = useState({});
	const navigate = useNavigate();
	const loginUrl = 'http://localhost:4000/login';
	const registrationUrl = 'http://localhost:4000/register';

	const handleFormSubmit = (e) => {
		e.preventDefault();
		if ((nameInput || props.isLoginPage) && emailInput && passwordInput) {
			const data = {
				name: nameInput || undefined,
				password: passwordInput,
				email: emailInput,
			};
			const url = props.isLoginPage ? loginUrl : registrationUrl;
			handleClick(url, data);
		}
	};

	const handleClick = async (url, jsonData) => {
		try {
			await fetch(url, {
				method: 'POST',
				body: JSON.stringify(jsonData),
				headers: {
					'Content-Type': 'application/json',
					accept: '*/*',
				},
			})
				.then((response) => {
					if (response.ok) {
						response.json().then((json) => {
							localStorage.setItem(
								'name',
								(json.user && json.user.name) || nameInput
							);
							localStorage.setItem('token', json.result || undefined);
						});
						navigate('/courses', { replace: true });
					} else {
						response.json().then((json) => {
							console.log(json);
							setErrors(json.errors ? getErrorsFromResponse(json.errors) : {});
						});
						return response.error;
					}
				})
				.catch((err) => {
					console.log(err);
				});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='registration-container'>
			<h2>{props.isLoginPage ? 'Login' : 'Registration'}</h2>
			<div className='registration-card'>
				<form onSubmit={handleFormSubmit} autoComplete='off'>
					{!props.isLoginPage ? (
						<span>
							<p className='registration-property-name'>Name</p>
							<Input
								error={errors.name}
								value={nameInput}
								setValue={setNameInput}
							/>
						</span>
					) : null}
					<p className='registration-property-name'>Email</p>
					<Input
						error={errors.email}
						value={emailInput}
						setValue={setEmailInput}
					/>
					<p className='registration-property-name'>Password</p>
					<Input
						error={errors.password}
						value={passwordInput}
						setValue={setPasswordInput}
					/>
					<div className='registration-login-button'>
						<Button name='LOGIN' />
					</div>
				</form>
				{props.isLoginPage ? (
					<p>
						If you don't have an account you may
						<Link className='registration-login' to='/registration'>
							Registration
						</Link>
					</p>
				) : (
					<p>
						If you have an account you may
						<Link className='registration-login' to='/login'>
							Login
						</Link>
					</p>
				)}
			</div>
		</div>
	);
};

Registration.propTypes = {
	isLoginPage: PropTypes.bool,
};
