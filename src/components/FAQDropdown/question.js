import React from 'react';

const Question = (props) => (
	<div className="faq-content">
		<div className="faq-question">
			<input id={props.id} type="checkbox" className="panel" />
			<div className="plus">+</div>
			<label for={props.id} className="panel-title">{props.question}</label>
			<div className="panel-content">{props.children}</div>
		</div>
	</div>
);

export default Question;
