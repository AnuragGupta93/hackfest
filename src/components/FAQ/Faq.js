import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ScrollableAnchor from 'react-scrollable-anchor';

import Question from './Question';

import '../../assets/styles/faq.css';

export default class Faq extends React.Component{
    render(){
        return(
			<ScrollableAnchor id="faq">
				<section className="faq">
					<Container>
						<h2>Frequently Asked Questions</h2>
						<Row className="align-items-centre">
							<Col md={6}>
								<div>
									<Question
										question="What is hackfest?"
										answer="Hackfest is an event in which numerous tech lovers divided into teams develop a product which is a hardware or software solution to real world problems or industrial problems. Hundreds of programmers get together to build something from scratch, be it a website, app, or some other product of their imagination. There will be food, prizes and opportunities to work with representatives from various companies."
									/>
									<Question
										question="I don't have an idea, what should I do?"
										answer="Don't worry! We will walk you through how to generate great ideas in the beginning of Hackfest.Your team can also work on problem statements of the sponsoring companies."
									/>
									<Question
										question="Who can participate?"
										answer="All university students. If you're someone who is willing to learn and wants to take a shot at changing the world, no matter what your field is, you definitely belong here. However, a selection process will be there."
									/>
									<Question
										question="How do I register for Hackfest?"
										answer="Participants have to register for the hackathon online. Teams of 3-5 can take participate in the Hackathon."
									/>
									{/* <Question
										question="What should be the team size and composition?"
										answer="Participants have to register for the hackathon online. Teams of 3-5 can take participate in the Hackathon."
									/>
									<Question
										question="Is there travelling reimbursement?"
										answer="We can’t guarantee reimbursements for everyone, but we don’t want money to keep you from experiencing Hackfest. Let us know if you still need help making your way to IIT(ISM) Dhanbad and we’ll see what we can do."
									/> */}
								</div>
							</Col>
							<Col md={6}>
								<div>									
									<Question
										question="What should be the team size and composition?"
										answer="Participants have to register for the hackathon online. Teams of 3-5 can take participate in the Hackathon."
									/>
									<Question
										question="I have never been to a hackathon before, what should I do?"
										answer="That's completely fine! You'll have plenty of opportunities to pick the brains of talented students around you. Furthermore, 36 hours is plenty of time to learn something new."
									/>
									<Question
										question="What should I bring?"
										answer="You will definitely need your laptop, phone, their chargers as well as a valid student or government ID. Feel free to bring along a sleeping bag and we recommend some comfortable clothes."
									/>
									<Question
										question="How much does it cost?"
										answer="Nothing. The event is absolutely free for all participants. We will provide you with the venue, food, Wi-Fi, etc. You just need to show up."
									/>
								</div>
							</Col>
						</Row>
					</Container>
				</section>
			</ScrollableAnchor>
        );
    }
}
