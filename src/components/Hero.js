import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import Typewriter from './Typewriter';
import Countdown from './Countdown';
import SponsorInvite from './SponsorInvite';

import '../assets/styles/hero.css';

export default class Hero extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			windowHeight: 720,
		};
	}

	componentDidMount(){
		this.updateDimensions();
		window.addEventListener("resize", this.updateDimensions);
	}

	updateDimensions = () => {
		this.setState({ windowHeight: window.innerHeight });
	}

	componentWillUnmount(){
		window.removeEventListener("resize", this.updateDimensions);
	}

	openRegistrationPortal = () => {
		window.open('https://www.techgig.com/hackathon/hackfest', "_blank");
	}

	render(){
		return(
			<section className="hero" style={{ minHeight: (this.state.windowHeight-70)+'px' }}>
				<Container>
					<Row className="align-items-center">
						<Col md={6}>
							<div className="inner-body">
								<div className="tagline">
									<Typewriter strings={['Imagine', 'Innovate', 'Implement']} colors={['#EF2F3C', 'rgb(136,194,229)', 'rgb(113,204,127)']} typeSpeed={50} startDelay={10} backSpeed={30} backDelay={1000} color={'#000'} />
								</div>
								<h2>HackFest</h2>
								<h5>IIT ISM DHANBAD &nbsp;•&nbsp; MARCH 27-29, 2020</h5>
								<Countdown />
								<button className="register-btn" onClick={this.openRegistrationPortal}>Register Now</button>
							</div>
							<SponsorInvite />
						</Col>
						<Col md={6}>
							<div className="inner-body thumb">
								<img src="./assets/images/hero.png" className="img-fluid" />
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		);
	}
}
