import React, { useState } from 'react';
import { Input } from '../../../../common/Input/Input';
import { Button } from '../../../../common/Button/Button';
import './SearchBar.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const SearchBar = (props) => {
	const [value, setValue] = useState('');
	return (
		<div className='search-bar-container'>
			<Input setValue={setValue} />
			<Button name='SEARCH' onClick={() => props.search(value)} />
			<Link to='add'>
				<Button name='ADD NEW' />
			</Link>
		</div>
	);
};

SearchBar.propTypes = {
	search: PropTypes.func,
};
