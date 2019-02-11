import React from 'react';
import './Button.css';

function NumberButton({ props }) {
	return (
		<div>
			<button className={props.btn}>{props.text}</button>
		</div>
	);
}

export default NumberButton;
