import React from 'react';

const TimelineTrack = (props) => (
	<div className="schedule__timeline-track" style={{ width: props.width }}>
		{props.children}
	</div>
);

export default TimelineTrack;
