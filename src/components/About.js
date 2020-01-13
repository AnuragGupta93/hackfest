import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ScrollableAnchor from 'react-scrollable-anchor';

import '../assets/styles/about.css';

export default class About extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			windowHeight: 720
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

	render(){
		return(
			<ScrollableAnchor id="about">
				<section className="about" style={{ minHeight: this.state.windowHeight+'px' }}>
					<Container>
						<Row>
							<Col md={6}>
								<div className="division">
									<h2 className="section-header">About the Institute</h2>
									<div>
										<p>
											Situated in the heart of the country’s prime coking coal belt, 260 kms from Kolkata with a campus spread over an area of 393 acres, IIT (ISM) has all the facilities of a world class academic institute. What started as an institution to impart mining education has graduated into a full-fledged technical institution of international acclaim offering a host of programmes in B.Tech, M.Tech, and doctorate programmes.
										</p>
										<p>
											The School has links with reputed universities and institutes across the globe and is well renowned for its established alumni base all over the world. The Department of Computer Science and Engineering was established in 1998 and is among the forefront in imparting education in Computer Science and Engineering in the country. The alumni base of the CSE department spans people in companies like Amazon, Facebook, Goldman Sachs, Google, Microsoft, Samsung, etc.
										</p>
									</div>
								</div>
							</Col>
							<Col md={6}>
								<div className="division">
									<h2 className="section-header">About HackFest</h2>
									<div>
										<p>
											HackFest is a 36 hour hackathon organised by the CSE Society, IIT (ISM) Dhanbad, which was devised as a means for students to build innovative solutions to real life problems. HackFest aims to contribute to the growth of technology in India by contributing to the cause of Make-in-India. The previous three iterations of HackFest proved to be among the finest hackathons in East India. Over 2000 enthusiasts signed up in the past iterations of the hackathon to build and innovative.
										</p>
										<p>
											HackFest believes in conceptualizing "ideas into reality" and was started as a platform to provide support to budding developers to enhance their problem solving skills and work towards providing groundbreaking solutions to existing day-to-day problems.
										</p>
									</div>
								</div>
							</Col>
						</Row>
					</Container>
				</section>
			</ScrollableAnchor>
		);
	}
}
