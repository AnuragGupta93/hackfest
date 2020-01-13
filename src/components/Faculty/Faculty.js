import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Member from './Member';

import '../../assets/styles/faculty.css';

export default class Faculty extends React.Component{
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
			<section className="faculty" style={{ minHeight: this.state.windowHeight+'px' }}>
				<Container>
					<h2>Faculty Coordinators</h2>
					<Row>
						<Col md={4}>
							<Member image="./assets/images/faculty/faculty (1).jpg" name="Dr. Haider Banka" post="H.O.D ,Associate Professor"/>
						</Col>
						<Col md={4}>
							<Member image="./assets/images/faculty/faculty (2).jpg" name="Dr. A.C.S. Rao" post="Assistant Professor"/>
						</Col>
						<Col md={4}>
							<Member image="./assets/images/faculty/faculty (3).jpg" name="Dr. Tarachand Amgoth" post="Assistant Professor"/>
						</Col>
					</Row>
				</Container>
			</section>
        );
    }
}
