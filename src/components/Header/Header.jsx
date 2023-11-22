import './Header.css';
import React from 'react';
import { Logo } from './components/Logo/Logo';
import { Button } from '../../common/Button/Button';

export const Header = (props) => (
	<div className='header'>
		<Logo />
		{props.name}
		{props.buttonText ? (
			<Button name={props.buttonText} onClick={props.onClick} />
		) : null}
	</div>
);
