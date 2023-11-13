import './Header.css';
import React from 'react';
import { Logo } from './components/Logo/Logo';
import { Button } from '../../common/Button/Button';

export const Header = () => (
	<div className='header'>
		<Logo />
		<Button name='LOGIN' />
	</div>
);
