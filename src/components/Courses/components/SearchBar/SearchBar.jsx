import React, { useState } from 'react';
import { Input } from '../../../../common/Input/Input';
import { Button } from '../../../../common/Button/Button';
import './SearchBar.css';

export const SearchBar = (props) => {
	const [value, setValue] = useState('');
	return (
		<div className='search-bar-container'>
			<Input setValue={setValue} />
			<Button name='SEARCH' onClick={() => props.search(value)} />
			<Button name='ADD NEW' />
		</div>
	);
};
