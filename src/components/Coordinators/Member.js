import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook';
import faLinkedinIn from '@fortawesome/fontawesome-free-brands/faLinkedinIn';

const Member = (props) => (
	<div className="member">
		<img src={props.image} />
		<div className="detail">
			<h5>{props.name}</h5>
			<div>{props.post}</div>
			<div className="social-links">
				<a href={props.linkedin} target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
				<a href={props.fb} target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
			</div>
		</div>
	</div>
);

export default Member;
