import React from 'react';

const HourLabel = (props) => (
	<div className="schedule__timeline-hour-label" style={{ left: props.left }}>
		{props.time}
	</div>
);

export default HourLabel;
