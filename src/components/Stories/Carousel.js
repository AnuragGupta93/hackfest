import React from "react";
import { Container } from "reactstrap";
import ScrollableAnchor from "react-scrollable-anchor";

import HackerStory from "./HackerStory";

import "../../assets/styles/stories.css";

export default class Carousel extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			classNames: [
				"hidden-left",
				"hidden-left",
				"hidden-left",
				"hidden-left",
				"next",
				"focus",
				"previous",
				"hidden-right",
				"hidden-right",
				"hidden-right"
			]
		};
	}

	componentDidMount() {
		this.setTimer();
	}

	componentWillUnmount() {
		this.clearTimer();
	}

	setTimer = () => {
		this.timer = setInterval(() => {
			this.rotateAntiClockwise();
		}, 10000);
	};

	clearTimer = () => {
		clearInterval(this.timer);
	};

	rotateAntiClockwise = () => {
		let arr = this.state.classNames;
		let i = arr.length - 1;
		let temp = arr[i];
		for (i; i > 0; i--) {
			arr[i] = arr[i - 1];
		}
		arr[i] = temp;
		this.setState({ classNames: arr });
	};

	rotateClockwise = () => {
		let arr = this.state.classNames;
		let i = 0;
		let temp = arr[i];
		for (i = 1; i < arr.length; i++) {
			arr[i - 1] = arr[i];
		}
		arr[i - 1] = temp;
		this.setState({ classNames: arr });
	};

	rotateAntiClockwiseOnClick = () => {
		this.clearTimer();
		this.rotateAntiClockwise();
		this.setTimer();
	};

	rotateClockwiseOnClick = () => {
		this.clearTimer();
		this.rotateClockwise();
		this.setTimer();
	};

	render() {
		return (
			<ScrollableAnchor id="stories">
				<section className="stories-carousel">
					<Container>
						<h2 className="section-header">Hacker Stories</h2>
					</Container>
					<div className="hacker-stories__container">
						<HackerStory
							className={this.state.classNames[0]}
							content={{
								avatar: "dripto.jpg",
								name: "Dr. Dripto Bakshi",
								designation: "Advisor ",
								company: "WhizMantra",
								link: "https://www.wizmantra.com/"
							}}
							actions={{
								rotateClockwise: this.rotateClockwiseOnClick,
								rotateAntiClockwise: this
									.rotateAntiClockwiseOnClick
							}}
						>
							It was great to see the enthusiasm and creativity in
							the participating teams. HackFest '18 proved that
							the youth of the country has the potential to do
							wonders, all it needs is a bit of support and the
							right platform to showcase their talent. It is high
							time we 'Renovate Education, Rejuvenate Lives' using
							the solutions provided by the tech savvy youth
							minds. It was a pleasure to be a part of the event
							as a mentor and judge, that was so professionally
							organized by the organizers.
						</HackerStory>
						<HackerStory
							className={this.state.classNames[1]}
							content={{
								avatar: "syed.jpg",
								name: "Syed Kamran Ahmed",
								designation: "Participant",
								company: "Aligarh Muslim University",
								link: "https://www.amu.ac.in/"
							}}
							actions={{
								rotateClockwise: this.rotateClockwiseOnClick,
								rotateAntiClockwise: this
									.rotateAntiClockwiseOnClick
							}}
						>
							Although our team didn't win but we did learn and
							gathered lot of experience at Hackfest2k19. I have
							to say, all the seniors as well as coorinators of
							IIT(ISM Dhanbad) who were involved in this event
							were extremely polite and helpful. They kept the
							josh high for the entire duration of hackfest event.
							The event went as smooth as a butter without any
							hustle. Kudos to the ISM Team. It was a crisp and
							crunch experience totally.
						</HackerStory>
						<HackerStory
							className={this.state.classNames[2]}
							content={{
								avatar: "mohit.jpg",
								name: "Mohit Mittal",
								designation: "Participant",
								company: "IIT (ISM) Dhanbad",
								link: "https://www.iitism.ac.in"
							}}
							actions={{
								rotateClockwise: this.rotateClockwiseOnClick,
								rotateAntiClockwise: this
									.rotateAntiClockwiseOnClick
							}}
						>
							My experience of Hackfest'17 was fabulous. Hackfest
							has become a brainstorming session for me. It was
							one of those times when I found perfect balance
							between talent, technology and passion. Thanks to
							organizers and faculty co-ordinators, who allowed me
							to be a part of this awesome event.
						</HackerStory>
						<HackerStory
							className={this.state.classNames[3]}
							content={{
								avatar: "pranav.jpg",
								name: "Pranav Chitrio",
								designation: "Participant",
								company: "IIT (ISM) Dhanbad",
								link: "https://www.iitism.ac.in"
							}}
							actions={{
								rotateClockwise: this.rotateClockwiseOnClick,
								rotateAntiClockwise: this
									.rotateAntiClockwiseOnClick
							}}
						>
							Hackfest 2017 was a good recreational activity. You
							get to learn a lot of stuff in that time span, the
							experience you gain is very useful. Apart from some
							technical glitches the organization of the event was
							also very good.
						</HackerStory>
						<HackerStory
							className={this.state.classNames[4]}
							content={{
								avatar: "vaishak.png",
								name: "Vaishak Shanbhag",
								designation: "Software Engineer",
								company: "Atkins",
								link: "https://www.atkinsglobal.com/en-gb"
							}}
							actions={{
								rotateClockwise: this.rotateClockwiseOnClick,
								rotateAntiClockwise: this
									.rotateAntiClockwiseOnClick
							}}
						>
							My experience of the inaugural Hackfest was simply
							fantastic. Ideas and enthusiasm of the participants
							were impressive. It was a professionally organised
							event, and all credit goes to organisers and the
							participants.
						</HackerStory>
						<HackerStory
							className={this.state.classNames[5]}
							content={{
								avatar: "dripto.jpg",
								name: "Dr. Dripto Bakshi",
								designation: "Advisor ",
								company: "WhizMantra",
								link: "https://www.wizmantra.com/"
							}}
							actions={{
								rotateClockwise: this.rotateClockwiseOnClick,
								rotateAntiClockwise: this
									.rotateAntiClockwiseOnClick
							}}
						>
							It was great to see the enthusiasm and creativity in
							the participating teams. HackFest '18 proved that
							the youth of the country has the potential to do
							wonders, all it needs is a bit of support and the
							right platform to showcase their talent. It is high
							time we 'Renovate Education, Rejuvenate Lives' using
							the solutions provided by the tech savvy youth
							minds. It was a pleasure to be a part of the event
							as a mentor and judge, that was so professionally
							organized by the organizers.
						</HackerStory>
						<HackerStory
							className={this.state.classNames[6]}
							content={{
								avatar: "ayan.jpg",
								name: "Ayan Chaudhary",
								designation: "Representative",
								company: "Mozilla, India",
								link: "https://www.mozilla.org"
							}}
							actions={{
								rotateClockwise: this.rotateClockwiseOnClick,
								rotateAntiClockwise: this
									.rotateAntiClockwiseOnClick
							}}
						>
							Hackfest'16 at ISM dhanbad was a perfect place for
							me to learn and relearn new things. Though I went
							there as a hackathon Mentor, but I learnt a lot of
							new things as well as I taught pupil a lot of new
							things too.
						</HackerStory>
						<HackerStory
							className={this.state.classNames[7]}
							content={{
								avatar: "mohit.jpg",
								name: "Mohit Mittal",
								designation: "Participant",
								company: "IIT (ISM) Dhanbad",
								link: "https://www.iitism.ac.in"
							}}
							actions={{
								rotateClockwise: this.rotateClockwiseOnClick,
								rotateAntiClockwise: this
									.rotateAntiClockwiseOnClick
							}}
						>
							My experience of Hackfest'17 was fabulous. Hackfest
							has become a brainstorming session for me. It was
							one of those times when I found perfect balance
							between talent, technology and passion. Thanks to
							organizers and faculty co-ordinators, who allowed me
							to be a part of this awesome event.
						</HackerStory>
						<HackerStory
							className={this.state.classNames[8]}
							content={{
								avatar: "pranav.jpg",
								name: "Pranav Chitrio",
								designation: "Participant",
								company: "IIT (ISM) Dhanbad",
								link: "https://www.iitism.ac.in"
							}}
							actions={{
								rotateClockwise: this.rotateClockwiseOnClick,
								rotateAntiClockwise: this
									.rotateAntiClockwiseOnClick
							}}
						>
							Hackfest 2017 was a good recreational activity. You
							get to learn a lot of stuff in that time span, the
							experience you gain is very useful. Apart from some
							technical glitches the organization of the event was
							also very good.
						</HackerStory>
						<HackerStory
							className={this.state.classNames[9]}
							content={{
								avatar: "vaishak.png",
								name: "Vaishak Shanbhag",
								designation: "Software Engineer",
								company: "Atkins",
								link: "https://www.atkinsglobal.com/en-gb"
							}}
							actions={{
								rotateClockwise: this.rotateClockwiseOnClick,
								rotateAntiClockwise: this
									.rotateAntiClockwiseOnClick
							}}
						>
							My experience of the inaugural Hackfest was simply
							fantastic. Ideas and enthusiasm of the participants
							were impressive. It was a professionally organised
							event, and all credit goes to organisers and the
							participants.
						</HackerStory>
					</div>
				</section>
			</ScrollableAnchor>
		);
	}
}
