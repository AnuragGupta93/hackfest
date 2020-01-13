import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ScrollableAnchor from 'react-scrollable-anchor';
import Member from './Member';

import '../../assets/styles/coordinators.css';

export default class Coordinators extends React.Component{
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
			<ScrollableAnchor id="coordinators">
				<section className="coordinators" style={{ minHeight: this.state.windowHeight+'px' }}>
					<Container>
						<h2>Student Coordinators</h2>
						<Row>
							<Col md={6}>
                                <Member image="./assets/images/coordinators/coordinator(5).jpeg" name="Abhishek Chattopadhyay" post="Sponsorship" fb="https://www.facebook.com/ABCAbhishek" linkedin="https://www.linkedin.com/in/abcabhishek/"/>
							</Col>
							<Col md={6}>
                                <Member image="./assets/images/coordinators/coordinator(3).jpeg" name="Monosij Ghosh" post="Promotions" fb="https://www.facebook.com/monosij.ghosh.3" linkedin="https://www.linkedin.com/in/monosij-ghosh-5b3a8a141/"/>
                            </Col>
						</Row>
						<Row>
							<Col md={6}>
								<Member image="./assets/images/coordinators/coordinator(1).jpeg" name="Amandeep Srivastava" post="Designing and Graphics" fb="https://www.facebook.com/aman.iitism" linkedin="https://www.linkedin.com/in/amandeep-srivastava-b2ba7b113/"/>
                            </Col>
							<Col md={6}>
                                <Member image="./assets/images/coordinators/coordinator(4).jpeg" name="Shobhit Mathur" post="Content Creation" fb="https://www.facebook.com/shobhit.mathur.9085" linkedin="https://www.linkedin.com/in/shobhit-mathur-49aa79123/"/>
							</Col>
						</Row>
						<Row>
							<Col md={6}>
                                <Member image="./assets/images/coordinators/coordinator(2).jpeg" name="Pritam Ghosh" post="Operations" fb="https://www.facebook.com/BlueHazardRony" linkedin="https://www.linkedin.com/in/bluehazard-ghosh/"/>
                            </Col>
							<Col md={6}>
                                <Member image="./assets/images/coordinators/coordinator(6).jpeg" name="Pratyush Kesarwani" post="Operations" fb="https://www.facebook.com/pratyush.kesarwani" linkedin="https://www.linkedin.com/in/pratyush2311/"/>
							</Col>
						</Row>
					</Container>
				</section>
			</ScrollableAnchor>
        );
    }
}
