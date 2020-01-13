import React from 'react';

const findDay = (x) => {
	let days = ['Friday', 'Saturday', 'Sunday'];
	return days[Math.trunc((16+Math.trunc(x/80))/24)];
};

const findTime = (x) => {
	let time = (4+Math.trunc(x/80))%12;
	if(!time) time=12;
	time += ((x%80)/80)*0.6;
	return time.toFixed(2);
};

const findTimeSuffix = (x) => {
	return Math.trunc((4+Math.trunc(x/80))/12)%2==0 ? 'pm' : 'am';
};

const calculateTimeOfEvent = (left, width) => {
	left = parseInt(left.split('px')[0]);
	width = parseInt(width.split('px')[0]);

	let startingDay = findDay(left);
	let endingDay = findDay(left+width);

	let startingTime = findTime(left);
	let endingTime = findTime(left+width);

	let startingTimeSuffix = findTimeSuffix(left);
	let endingTimeSuffix = findTimeSuffix(left+width);

	return startingDay + ', ' + startingTime+startingTimeSuffix + ' - ' + endingDay + ', ' + endingTime+endingTimeSuffix;
};

const TimelineTrackItem = (props) => (
	<div className="schedule__timeline-track-item" style={{ left: props.left, width: props.width }}
		onClick={
			() => {
				props.changeModalContent(props.event_name, calculateTimeOfEvent(props.left, props.width));
				props.openModal();
			}
		}
	>
		<h4>{props.event_name}</h4>
		<div className="time-bar" style={{ backgroundColor: props.color }}>
			<div className="time-endpoints start" style={{ backgroundColor: props.color }}></div>
			<div className="time-endpoints end" style={{ backgroundColor: props.color }}></div>
		</div>
	</div>
);

export default TimelineTrackItem;
