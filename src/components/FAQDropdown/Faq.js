import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ScrollableAnchor from 'react-scrollable-anchor';

import Question from './question';

import '../../assets/styles/faq_dropdown.css';

export default class Faq extends React.Component{
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
			<ScrollableAnchor id="faq">
				<section className="faq" style={{ minHeight: this.state.windowHeight+'px' }}>
                    <Container>
                        <h2 className="section-header">Frequently Asked Questions</h2>
                        <Row className="align-items-centre">
                            <Col md={6}>
                                <div className="faq-content">
                                    <Question id="q1" question="What is hackfest?">
										Hackfest is an event in which numerous tech lovers divided into teams develop a product which is a hardware or software solution to real world problems or industrial problems.
										Hundreds of programmers get together to build something from scratch, be it a website, app, or some other product of their imagination.
										There will be food, prizes and opportunities to work with representatives from various companies.
									</Question>
									<Question id="q2" question="I don't have an idea, what should I do?">
										Don't worry! We will walk you through how to generate great ideas in the beginning of Hackfest.
										Your team can also work on problem statements of the sponsoring companies.
									</Question>
									<Question id="q3" question="Who can participate?">
										All university students.
										If you're someone who is willing to learn and wants to take a shot at changing the world, no matter what your field is, you definitely belong here.
										However, a selection process will be there.
									</Question>
									<Question id="q4" question="How do I register for Hackfest?">
										Participants have to register for the hackathon online.
										Teams of 3-5 can take participate in the Hackathon.
									</Question>
									{/* <Question id="q1" question="What should be the team size and composition?">
										Participants have to register for the hackathon online.
										Teams of 3-5 can take participate in the Hackathon.
									</Question>
                                    <Question id="q2" question="Is there travelling reimbursement?">
										We can’t guarantee reimbursements for everyone, but we don’t want money to keep you from experiencing Hackfest.
										Let us know if you still need help making your way to IIT(ISM) Dhanbad and we’ll see what we can do.
									</Question> */}
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="faq-content">
                                    <Question id="q5" question="What should be the team size and composition?">
										Participants have to register for the hackathon online.
										Teams of 3-5 can take participate in the Hackathon.
									</Question>
									<Question id="q6" question="I have never been to a hackathon before, what should I do?">
										That's completely fine!
										You'll have plenty of opportunities to pick the brains of talented students around you.
										Furthermore, 36 hours is plenty of time to learn something new.
									</Question>
									<Question id="q7" question="What should I bring?">
										You will definitely need your laptop, phone, their chargers as well as a valid student or government ID.
										Feel free to bring along a sleeping bag and we recommend some comfortable clothes.
									</Question>
									<Question id="q8" question="How much does it cost?">
										Nothing. The event is absolutely free for all participants.
										We will provide you with the venue, food, Wi-Fi, etc. You just need to show up.
									</Question>
								</div>
                            </Col>
                        </Row>
                    </Container>
				</section>
			</ScrollableAnchor>
        );
    }
}
