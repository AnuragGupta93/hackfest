import React from 'react';

import '../../assets/styles/dates_timeline2.css';

const DatesTimeline = () => (
	<div>
		<ul className="timeline">
			<li>
				<div className="direction-l">
				<div className="flag-wrapper">
					<span className="hexa"></span>
					<span className="flag">Registration starts</span>
					<span className="time-wrapper"><span className="time">February 2<sup>nd</sup></span></span>
				</div>
				</div>
			</li>
			<li>
				<div className="direction-l">
				<div className="flag-wrapper">
					<span className="hexa"></span>
					<span className="flag">Idea submission</span>
					<span className="time-wrapper"><span className="time"> March 8<sup>th</sup></span></span>
				</div>
				</div>
			</li>
			<li>
				<div className="direction-l">
				<div className="flag-wrapper">
					<span className="hexa"></span>
					<span className="flag">Announcement of shorlisted ideas</span>
					<span className="time-wrapper"><span className="time">March 15<sup>th</sup></span></span>
				</div>
				</div>
			</li>
			<li>
				<div className="direction-l">
				<div className="flag-wrapper">
					<span className="hexa"></span>
					<span className="flag">Workshops: Day 1</span>
					<span className="time-wrapper"><span className="time">To be finalised.</span></span>
				</div>
				</div>
			</li>
			<li>
				<div className="direction-l">
				<div className="flag-wrapper">
					<span className="hexa"></span>
					<span className="flag">Workshops: Day 2</span>
					<span className="time-wrapper"><span className="time">To be finalised.</span></span>
				</div>
				</div>
			</li>
			<li>
				<div className="direction-l">
				<div className="flag-wrapper">
					<span className="hexa"></span>
					<span className="flag">Announcement of extended shortlist</span>
					<span className="time-wrapper"><span className="time">March 15<sup>th</sup></span></span>
				</div>
				</div>
			</li>
			<li>
				<div className="direction-l">
				<div className="flag-wrapper">
					<span className="hexa"></span>
					<span className="flag">Hack begins !</span>
					<span className="time-wrapper"><span className="time">March 27<sup>th</sup></span></span>
				</div>
				</div>
			</li>
		</ul>
	</div>
);

export default DatesTimeline;
