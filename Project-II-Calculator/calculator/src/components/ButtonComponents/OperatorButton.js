import React from 'react';
import './Button.css';

function OperatorButton(props) {
	return (
		<div>
			<button className="red-btn">{props.text}</button>
		</div>
	);
}

export default OperatorButton;
