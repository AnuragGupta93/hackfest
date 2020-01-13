import React from 'react';

import '../assets/styles/countdown.scss';

export default class Countdown extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0
		};
	}

	componentDidMount(){
		const twentysevenMarch = new Date(2020, 2, 27).getTime();

		//countdown
		this.timer = setInterval(() => {

			// get current date and time
			const now = new Date().getTime();

			// get the difference
			const diff = twentysevenMarch - now;

			// math
			let days = Math.floor(diff / (1000 * 60 * 60 * 24));
			let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      // console.log(days, hours, minutes, seconds);

			// display
			this.setState({ days, hours, minutes, seconds });

		}, 1000);
	}

	componentWillUnmount(){
		// clearInterval(this.timer);
	}

	render(){
    let {days, hours, minutes, seconds} = this.state;
		return(
			<div className="timer">
				<div className="days">
					<div className="numbers">{days}</div>
					days
				</div>
				<div className="hours">
					<div className="numbers">{hours}</div>
					hours
				</div>
				<div className="minutes">
					<div className="numbers">{minutes}</div>
					minutes
				</div>
				<div className="seconds">
					<div className="numbers">{seconds}</div>
					seconds
				</div>
			</div>
		);
	}
}
