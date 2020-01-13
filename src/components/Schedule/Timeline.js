import React from 'react';

import TimelineTrack from './TimelineTrack';
import TimelineTrackItem from './TimelineTrackItem';
import HourLabel from './HourLabel';

import '../../assets/styles/schedule.css';

const GeneratedHourLabels = () => {
	let columns = [];
	let start = 4;
	let suffix = 'PM';
	for(let i=1;i<52;i++){
		let time = (start++)%12;
		if(time == 0){
			time = 12;
			suffix = suffix=='AM' ? 'PM' : 'AM';
		}
		columns.push(<HourLabel left={(i-1)*80+'px'} time={time+suffix} />);
	}
	return columns;
}

const width = 51*80;

export default class Timeline extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			activeDay: 1
		};
	}

	timeline = React.createRef();

	componentDidMount(){
		const node = this.timeline.current;
		node.addEventListener("scroll", this.updateActiveDay);
	}

	updateActiveDay = () => {
		const node = this.timeline.current;
		let day = 1;
		if(node.scrollLeft >= 32*80)
			day = 3;
		else if(node.scrollLeft >= 8*80)
			day = 2;
		this.setState({ activeDay: day });
	}

	componentWillUnmount(){
		const node = this.timeline.current;
		node.removeEventListener("scroll", this.updateActiveDay);
	}

	handleDaySwitch = (day) => {
		const node = this.timeline.current;
		if(day == 1)
			node.scrollLeft = 0;
		else if(day == 2)
			node.scrollLeft = 8*80;
		else if(day == 3)
			node.scrollLeft = 32*80;
	}

	render(){
		return(
			<div className="schedule__container">
				<div className="schedule__days">
					<button className={"day-switch " + (this.state.activeDay == 1 ? 'active' : '')} onClick={() => { this.handleDaySwitch(1); }}>Day 1</button>
					<button className={"day-switch " + (this.state.activeDay == 2 ? 'active' : '')} onClick={() => { this.handleDaySwitch(2); }}>Day 2</button>
					<button className={"day-switch " + (this.state.activeDay == 3 ? 'active' : '')} onClick={() => { this.handleDaySwitch(3); }}>Day 3</button>
				</div>
				<div className="schedule__timeline" ref={this.timeline}>
					<TimelineTrack width={width+'px'}>
						<TimelineTrackItem event_name="Hack continues" left={8*80+'px'} width={36*80+'px'} color="rgb(136,194,229)" openModal={this.props.openModal} changeModalContent={this.props.changeModalContent} />
					</TimelineTrack>

					<TimelineTrack width={width+'px'}>
						<TimelineTrackItem event_name="Team Registration" left={0+'px'} width={2*80+'px'} color="rgb(136,194,229)" openModal={this.props.openModal} changeModalContent={this.props.changeModalContent} />
						<TimelineTrackItem event_name="Problem Statement" left={7*80+20+'px'} width={60+'px'} color="rgb(136,194,229)" openModal={this.props.openModal} changeModalContent={this.props.changeModalContent} />
						<TimelineTrackItem event_name="Evaluation 1st" left={17*80+'px'} width={80+'px'} color="rgb(136,194,229)" openModal={this.props.openModal} changeModalContent={this.props.changeModalContent} />
						<TimelineTrackItem event_name="Evaluation 2nd" left={26*80+'px'} width={80+'px'} color="rgb(136,194,229)" openModal={this.props.openModal} changeModalContent={this.props.changeModalContent} />
						<TimelineTrackItem event_name="Evaluation 3rd" left={38*80+'px'} width={80+'px'} color="rgb(136,194,229)" openModal={this.props.openModal} changeModalContent={this.props.changeModalContent} />
						<TimelineTrackItem event_name="Final Presentation" left={47*80+'px'} width={2*80+'px'} color="rgb(136,194,229)" openModal={this.props.openModal} changeModalContent={this.props.changeModalContent} />
						<TimelineTrackItem event_name="Announcement of Result & Prize distribution" left={49*80+40+'px'} width={40+'px'} color="rgb(136,194,229)" openModal={this.props.openModal} changeModalContent={this.props.changeModalContent} />
					</TimelineTrack>

					<TimelineTrack width={width+'px'}>
						<TimelineTrackItem event_name="Speech by HOD, Director, CSES President, Treasurer" left={3*80+'px'} width={80+'px'} color="rgb(113,204,127)" openModal={this.props.openModal} changeModalContent={this.props.changeModalContent} />
						<TimelineTrackItem event_name="Introduction of Company Representatives" left={6*80+40+'px'} width={80-20+'px'} color="rgb(113,204,127)" openModal={this.props.openModal} changeModalContent={this.props.changeModalContent} />
						<TimelineTrackItem event_name="Tech Talk 1 (Gold Sponsor)" left={19*80+40+'px'} width={40+'px'} color="rgb(113,204,127)" openModal={this.props.openModal} changeModalContent={this.props.changeModalContent} />
						<TimelineTrackItem event_name="Tech Talk 2 (Title Sponsor)" left={27*80+'px'} width={80+'px'} color="rgb(113,204,127)" openModal={this.props.openModal} changeModalContent={this.props.changeModalContent} />
						<TimelineTrackItem event_name="Creative Event" left={32*80+40+'px'} width={40+'px'} color="rgb(113,204,127)" openModal={this.props.openModal} changeModalContent={this.props.changeModalContent} />
						<TimelineTrackItem event_name="Tech Talk 3 (Platinum Sponsor)" left={44*80+20+'px'} width={60+'px'} color="rgb(113,204,127)" openModal={this.props.openModal} changeModalContent={this.props.changeModalContent} />
					</TimelineTrack>

					<TimelineTrack width={width+'px'}>
						<TimelineTrackItem event_name="Dinner" left={4*80+'px'} width={2*80+'px'} color="#EF2F3C" openModal={this.props.openModal} changeModalContent={this.props.changeModalContent} />
						<TimelineTrackItem event_name="Snacks" left={11*80+'px'} width={80+'px'} color="#EF2F3C" openModal={this.props.openModal} changeModalContent={this.props.changeModalContent} />
						<TimelineTrackItem event_name="Breakfast" left={15*80+'px'} width={80+40+'px'} color="#EF2F3C" openModal={this.props.openModal} changeModalContent={this.props.changeModalContent} />
						<TimelineTrackItem event_name="Lunch" left={20*80+40+'px'} width={2*80+'px'} color="#EF2F3C" openModal={this.props.openModal} changeModalContent={this.props.changeModalContent} />
						<TimelineTrackItem event_name="Dinner" left={28*80+'px'} width={80+40+'px'} color="#EF2F3C" openModal={this.props.openModal} changeModalContent={this.props.changeModalContent} />
						<TimelineTrackItem event_name="Snacks" left={36*80+'px'} width={80+'px'} color="#EF2F3C" openModal={this.props.openModal} changeModalContent={this.props.changeModalContent} />
						<TimelineTrackItem event_name="Breakfast" left={39*80+'px'} width={80+40+'px'} color="#EF2F3C" openModal={this.props.openModal} changeModalContent={this.props.changeModalContent} />
						<TimelineTrackItem event_name="Lunch" left={45*80+'px'} width={80+40+'px'} color="#EF2F3C" openModal={this.props.openModal} changeModalContent={this.props.changeModalContent} />
					</TimelineTrack>

					<TimelineTrack width={width+'px'}>
						<GeneratedHourLabels />
					</TimelineTrack>
				</div>
			</div>
		);
	}
}
