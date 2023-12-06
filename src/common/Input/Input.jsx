import React, { useRef } from 'react';
import './Input.css';
import PropTypes from 'prop-types';

export const Input = (props) => {
	const inputRef = useRef(null);
	return (
		<div>
			<input
				className={props.error ? 'error-input' : 'input'}
				ref={inputRef}
				value={props.value}
				onInput={() =>
					props?.setValue && props.setValue(inputRef.current.value)
				}
				placeholder={props.placeholder || 'Input text'}
			/>
			{props.error ? <p className='error-text'>{props.error}</p> : null}
		</div>
	);
};

Input.propTypes = {
	value: PropTypes.string,
	setValue: PropTypes.func,
	placeholder: PropTypes.string,
};
