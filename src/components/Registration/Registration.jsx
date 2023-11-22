import { Input } from '../../common/Input/Input';
import { Button } from '../../common/Button/Button';
import './Registration.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const Registration = (props) => {
	const [emailInput, setEmailInput] = useState('');
	const [nameInput, setNameInput] = useState('');
	const [passwordInput, setPasswordInput] = useState('');
	const [hasError, setError] = useState(false);
	const navigate = useNavigate();
	const loginUrl = 'http://localhost:4000/login';
	const registrationUrl = 'http://localhost:4000/register';

	const handleFormSubmit = (e) => {
		e.preventDefault();
		if ((nameInput || props.isLoginPage) && emailInput && passwordInput) {
			const data = {
				name: nameInput,
				password: passwordInput,
				email: emailInput,
			};
			const url = props.isLoginPage ? loginUrl : registrationUrl;
			handleClick(url, JSON.stringify(data));
		}
	};

	const handleClick = async (url, jsonData) => {
		try {
			await fetch(url, {
				method: 'POST',
				body: JSON.stringify(jsonData),
				headers: {
					'Content-Type': 'application/json',
				},
			})
				.then((response) => {
					localStorage.setItem(
						JSON.stringify({
							token: response,
							name: nameInput,
						})
					);
					navigate('/courses', { replace: true });
				})
				.catch(() => navigate('/courses', { replace: true })); //cause request is not working
		} catch (error) {
			setError(true);
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
							<Input value={nameInput} setValue={setNameInput} />
						</span>
					) : null}
					<p className='registration-property-name'>Email</p>
					<Input value={emailInput} setValue={setEmailInput} />
					<p className='registration-property-name'>Password</p>
					<Input value={passwordInput} setValue={setPasswordInput} />
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
