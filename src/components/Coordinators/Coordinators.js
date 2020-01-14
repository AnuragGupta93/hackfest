import React from "react";
import { Container, Row, Col } from "reactstrap";
import ScrollableAnchor from "react-scrollable-anchor";
import Member from "./Member";

import "../../assets/styles/coordinators.css";

export default class Coordinators extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			windowHeight: 720
		};
	}

	componentDidMount() {
		this.updateDimensions();
		window.addEventListener("resize", this.updateDimensions);
	}

	updateDimensions = () => {
		this.setState({ windowHeight: window.innerHeight });
	};

	componentWillUnmount() {
		window.removeEventListener("resize", this.updateDimensions);
	}

	render() {
		return (
			<ScrollableAnchor id="coordinators">
				<section
					className="coordinators"
					style={{ minHeight: this.state.windowHeight + "px" }}
				>
					<Container>
						<h2>Student Coordinators</h2>
						<Row>
							<Col md={6}>
								<Member
									image="./assets/images/coordinators/coordinator_1.jpeg"
									name="Mohit Tripathi"
									post="Sponsorship Lead"
									fb="https://www.facebook.com/gopalmt?ref=br_rs"
									linkedin="https://www.linkedin.com/in/mohit-tripathi-718a5b54/"
								/>
							</Col>
							<Col md={6}>
								<Member
									image="./assets/images/coordinators/coordinator_2.jpeg"
									name="Aditya Sharma"
									post="Sponsorship Lead"
									fb="https://www.facebook.com/ads1419"
									linkedin="https://www.linkedin.com/in/aditya-sharma-363b1230/3"
								/>
							</Col>
						</Row>
						<Row>
							<Col md={6}>
								<Member
									image="./assets/images/coordinators/coordinator_3.jpeg"
									name="Dakshita Chaturvedi"
									post="Content Lead"
									fb="https://www.facebook.com/profile.php?id=100013040449732"
									linkedin="https://www.linkedin.com/in/dakshita/"
								/>
							</Col>
							<Col md={6}>
								<Member
									image="./assets/images/coordinators/coordinator_4.jpeg"
									name="Abhishek Rana"
									post="Designing Lead"
									fb="https://www.facebook.com/profile.php?id=100009437662065&ref=br_rs"
									linkedin="https://www.linkedin.com/in/shobhit-mathur-49aa79123/"
								/>
							</Col>
						</Row>
						<Row>
							<Col md={6}>
								<Member
									image="./assets/images/coordinators/coordinator_5.jpeg"
									name="Nasir Sayyed"
									post="Operations"
									fb="https://www.facebook.com/NYSayyed"
									linkedin="https://www.linkedin.com/in/nasir-sayyed-91a01213b/"
								/>
							</Col>
							<Col md={6}>
								<Member
									image="./assets/images/coordinators/coordinator_6.jpeg"
									name="Kamlesh Ranjan"
									post="Operations"
									fb="https://www.facebook.com/kamlesh.ranjan.18"
									linkedin="https://www.linkedin.com/in/pratyush2311/"
								/>
							</Col>
							<Col md={6}>
								<Member
									image="./assets/images/coordinators/coordinator_7.jpeg"
									name="Kamini Kumari Rajput"
									post="Promotion Lead"
									fb="https://www.facebook.com/profile.php?id=100009323620435"
									linkedin="https://www.linkedin.com/in/kamini-kumari-6b8835150/"
								/>
							</Col>
							<Col md={6}>
								<Member
									image="./assets/images/coordinators/coordinator_8.jpeg"
									name="Banipreet Raheja"
									post="Promotion Lead"
									fb="https://www.facebook.com/banipreet.raheja?ref=br_rs"
									linkedin="https://www.linkedin.com/in/banipreet-raheja/"
								/>
							</Col>
						</Row>
					</Container>
				</section>
			</ScrollableAnchor>
		);
	}
}
