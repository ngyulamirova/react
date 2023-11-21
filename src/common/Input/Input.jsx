import React, { useRef } from 'react';
import './Input.css';

export const Input = (props) => {
	const inputRef = useRef(null);
	return (
		<input
			className='input'
			ref={inputRef}
			value={props.value}
			onInput={() => props?.setValue && props.setValue(inputRef.current.value)}
			placeholder={props.placeholder || 'Input text'}
		/>
	);
};
