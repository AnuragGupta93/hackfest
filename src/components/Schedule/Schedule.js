import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ScrollableAnchor from 'react-scrollable-anchor';
import Rodal from 'rodal';

import DatesTimeline from './DatesTimeline2';
import Timeline from './Timeline';

export default class Schedule extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			windowHeight: 720,
			modalIsOpen: false,
			modalContent: {
				eventName: '',
				eventTime: ''
			}
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

	openModal = () => {
		this.setState({ modalIsOpen: true });
	}

	closeModal = () => {
		this.setState({ modalIsOpen: false });
	}

	changeModalContent = (eventName, eventTime) => {
		this.setState({
			modalContent: {
				eventName,
				eventTime
			}
		});
	}

	render(){
		return(
			<ScrollableAnchor id="schedule">
				<section className="schedule" style={{ minHeight: this.state.windowHeight+'px' }}>
					<Container>
						<h2 className="section-header">Event Schedule</h2>
						<Row className="align-items-center">
							<Col md={6}>
								<div>
									<DatesTimeline />
								</div>
							</Col>
							<Col md={6}>
								<div className="division">
									<Timeline openModal={this.openModal} changeModalContent={this.changeModalContent} />
								</div>
							</Col>
						</Row>
					</Container>

					<Rodal
						visible={this.state.modalIsOpen}
						onClose={this.closeModal}
						closeOnEsc={true}
						animation="slideUp"
					>
						<div className="modal-content__container">
							<h5>{this.state.modalContent.eventName}</h5>
							<h6 style={{ color: 'rgba(0, 0, 0, 0.5)' }}>{this.state.modalContent.eventTime}</h6>
						</div>
					</Rodal>
				</section>
			</ScrollableAnchor>
		);
	}
}
