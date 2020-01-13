import React from 'react';

const Member = (props) => (
	<div className="member">
		<img src={props.image} />
		<div className="detail">
			<h5>{props.name}</h5>
			<div>{props.post}</div>
			<div>Department of Computer Science and Engineering, IIT (ISM) Dhanbad</div>
		</div>
	</div>
);

export default Member;
