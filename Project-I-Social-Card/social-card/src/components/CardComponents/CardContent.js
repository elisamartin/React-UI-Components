import React from 'react';
import './Card.css';

function CardContent() {
	return (
		<div className="card-content">
			<p>
				<span className="card-title">Get started with React</span> <br />
				React makes it painless to create interactive UIs. Design simple views for each state in your
				application. <br />
				<span className="card-link"> reactjs.org</span>
			</p>
		</div>
	);
}

export default CardContent;
