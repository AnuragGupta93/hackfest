import React from 'react';
import { Container } from 'reactstrap';

import '../../assets/styles/dates_timeline.css';

const DatesTimeline = () => (
	<Container>
		<ul className="timeline">
			<li>
				<div className="direction-l">
					<div className="flag-wrapper">
						<span className="flag">Registration starts</span>
						<span className="time-wrapper"><span className="time">February 1<sup>st</sup></span></span>
					</div>
					{/* <div className="desc">Lorem ipsum doler cit ammet</div> */}
				</div>
			</li>

			<li>
				<div className="direction-l">
					<div className="flag-wrapper">
						<span className="flag">Idea submission</span>
						<span className="time-wrapper"><span className="time">February 5<sup>th</sup></span></span>
					</div>
					{/* <div className="desc">Lorem ipsum doler cit ammet</div> */}
				</div>
			</li>
			<li>
				<div className="direction-l">
					<div className="flag-wrapper">
						<span className="flag">Announcement of shorlisted ideas</span>
						<span className="time-wrapper"><span className="time">February 25<sup>th</sup></span></span>
					</div>
					{/* <div className="desc">Lorem ipsum doler cit ammet</div> */}
				</div>
			</li>
			<li>
				<div className="direction-l">
					<div className="flag-wrapper">
						<span className="flag">Announcement of extended shortlist</span>
						<span className="time-wrapper"><span className="time">March 4<sup>th</sup></span></span>
					</div>
					{/* <div className="desc">Lorem ipsum doler cit ammet</div> */}
				</div>
			</li>
			<li>
				<div className="direction-l">
					<div className="flag-wrapper">
						<span className="flag">Hack begins !</span>
						<span className="time-wrapper"><span className="time">March 27<sup>th</sup></span></span>
					</div>
					{/* <div className="desc">Lorem ipsum doler cit ammet</div> */}
				</div>
			</li>
		</ul>
	</Container>
);

export default DatesTimeline;
