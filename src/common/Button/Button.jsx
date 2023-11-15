import React from 'react';
import './Button.css';
import edit from '../../assets/edit.png';
import bin from '../../assets/bin.png';

const getIcon = (value) => {
	switch (value) {
		case 'edit': {
			return edit;
		}
		case 'bin': {
			return bin;
		}
		default: {
			return null;
		}
	}
};

export const Button = (props) => (
	<button className={props?.name ? 'button' : 'icon'} onClick={props.onClick}>
		{props?.name}
		{props.icon ? (
			<img alt={props.icon} src={getIcon(props.icon)} className='button-icon' />
		) : null}
	</button>
);
