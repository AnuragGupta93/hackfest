import React from 'react';
import { Container } from 'reactstrap';

import Glimpse from './Glimpse';

import '../../assets/styles/glimpses.css';

export default class Carousel extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			classNames: ['hidden-left', 'hidden-left', 'next', 'focus', 'previous', 'hidden-right']

		};
	}

	componentDidMount(){
		this.setTimer();
	}

	componentWillUnmount(){
		this.clearTimer();
	}

	setTimer = () => {
		this.timer = setInterval(() => {
			this.rotateAntiClockwise();
		}, 3000);
	}

	clearTimer = () => {
		clearInterval(this.timer);
	}

	rotateAntiClockwise = () => {
		let arr = this.state.classNames;
		let i = arr.length-1;
		let temp = arr[i];
		for(i; i>0; i--){
			arr[i] = arr[i-1];
		}
		arr[i] = temp;
		this.setState({ classNames: arr });
	}

	render(){
		return(
			<section className="glimpses-carousel">
				<Container>
					<h2 className="section-header">Glimpses of HackFest</h2>
				</Container>
				<div className="glimpses__container">
					<Glimpse className={this.state.classNames[0]} img="1.jpg" />
					<Glimpse className={this.state.classNames[1]} img="2.jpg" />
					<Glimpse className={this.state.classNames[2]} img="3.jpg" />
					<Glimpse className={this.state.classNames[3]} img="4.jpg" />
					<Glimpse className={this.state.classNames[4]} img="5.jpg" />
					<Glimpse className={this.state.classNames[5]} img="6.jpg" />
				</div>
			</section>
		);
	}
}
