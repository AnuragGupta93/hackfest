import React from 'react';
import { Container } from 'reactstrap';
import ScrollableAnchor from 'react-scrollable-anchor';

import '../assets/styles/prizes.css';

export default class Prizes extends React.Component{
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
			<ScrollableAnchor id="prizes">
				<section className="prizes" style={{ minHeight: this.state.windowHeight+'px' }}>
					<Container>
						<h2 className="section-header">Previous Year Prizes</h2>
						<div className="prizes-list">
							<div className="prize-card">
								<div className="thumb">
									<img src="./assets/images/sponsors/paytm.jpg" className="img-fluid" />
								</div>
								<div className="prize-content">
									<ul>
										<li>Internship opportunities for top 10 teams. (Based on performance and PI)</li>
										<li>T-shirts and cool swag.</li>
									</ul>
								</div>
							</div>
							<div className="prize-card">
								<div className="thumb">
									<img src="./assets/images/sponsors/devfolio1.png" className="img-fluid" />
								</div>
								<div className="prize-content">
									<ul>
										<li>T-Shirts for all Ethereum Track Hackers who submit hacks on Devfolio</li>
										<li>Stickers for all hackers in the hackathon</li>
										<li>Job and internship opportunities. (Based on performance)</li>
									</ul>
								</div>
							</div>
							<div className="prize-card">
								<div className="thumb">
									<img src="./assets/images/sponsors/matic.png" className="img-fluid" />
								</div>
								<div className="prize-content">
									<ul>
										<li>API Prizes by Matic, 1 Prize (5K).</li>
										<li>Job and internship opportunities. (Based on performance)</li>
									</ul>
								</div>
							</div>
							<div className="prize-card">
								<div className="thumb">
									<img src="./assets/images/sponsors/womentechmakers.png" className="img-fluid" />
								</div>
								<div className="prize-content">
									<ul>
										<li>Cash prizes for best all women team.</li>
									</ul>
								</div>
							</div>
							<div className="prize-card">
								<div className="thumb">
									<img src="./assets/images/sponsors/hirescript.jpg" className="img-fluid" />
								</div>
								<div className="prize-content">
									<ul>
										<li>Internship opportunities</li>
										<li>Cool swag goodies</li>
									</ul>
								</div>
							</div>
							<div className="prize-card">
								<div className="thumb">
									<img src="./assets/images/sponsors/walmart.png" className="img-fluid" />
								</div>
								<div className="prize-content">
									<ul>
										<li>Goodies</li>
										<li>Cool swag</li>
									</ul>
								</div>
							</div>
							<div className="prize-card">
								<div className="thumb">
									<img src="./assets/images/sponsors/codeasylums.JPG" className="img-fluid" />
								</div>
								<div className="prize-content">
									<ul>
										<li>Scholarships (for the Summer Camp 2019) & goodies for the participants & best performers of the workshop</li>
										<li>Special prize for the best educational hack in the hackathon</li>
										<li>Stickers (for all teams) and T-shirts for the best 10 teams</li>
									</ul>
								</div>
							</div>
							<div className="prize-card">
								<div className="thumb">
									<img src="./assets/images/sponsors/zulip.png" className="img-fluid" />
								</div>
								<div className="prize-content">
									<ul>
										<li>$100 cash prize for best bot built using zulip api.</li>
									</ul>
								</div>
							</div>
							<div className="prize-card">
								<div className="thumb">
									<img src="./assets/images/sponsors/wolfram.png" className="img-fluid" />
								</div>
								<div className="prize-content">
									<ul>
										<li>Wolfram award to everyone for top 20 teams each worth $375</li>
										<li>Access to Wolfram for each participant for 30 days, worth $25 per user</li>
									</ul>
								</div>
							</div>
							<div className="prize-card">
								<div className="thumb">
									<img src="./assets/images/sponsors/techgig.png" className="img-fluid" />
								</div>
								<div className="prize-content">
									<ul>
										<li>Internship opportunities.</li>
									</ul>
								</div>
							</div>
							<div className="prize-card">
								<div className="thumb">
									<img src="./assets/images/sponsors/cloudsploit.png" className="img-fluid" />
								</div>
								<div className="prize-content">
									<ul>
										<li>Basic service(4 months) to everyone who makes it to onsite finals</li>
										<li>Premium service (4 months) to winners</li>
									</ul>
								</div>
							</div>
							<div className="prize-card">
								<div className="thumb">
									<img src="./assets/images/sponsors/skillenza.png" className="img-fluid" />
								</div>
								<div className="prize-content">
									<ul>
										<li>Intership opportunities for top 3 teams.</li>
										<li>T-shirts and 10000 Skillenza credits for winners.</li>
									</ul>
								</div>
							</div>
							<div className="prize-card">
								<div className="thumb">
									<img src="./assets/images/sponsors/digital-ocean.png" className="img-fluid" />
								</div>
								<div className="prize-content">
									<ul>
										<li>Digital ocean credits for all.</li>
										<li>Extra credits to winners.</li>
									</ul>
								</div>
							</div>
							<div className="prize-card">
								<div className="thumb">
									<img src="./assets/images/sponsors/ola.png" className="img-fluid" />
								</div>
								<div className="prize-content">
									<ul>
										<li>Ride partner.</li>
										<li>OLA coupons worth rupees 250 per contestant</li>
									</ul>
								</div>
							</div>
							<div className="prize-card">
								<div className="thumb">
									<img src="./assets/images/sponsors/creative-tim.png" className="img-fluid" />
								</div>
								<div className="prize-content">
									<ul>
										<li>Credits worth $3000 for winners.</li>
										<li>Premium license for all participating teams.</li>
									</ul>
								</div>
							</div>
							<div className="prize-card">
								<div className="thumb">
									<img src="./assets/images/sponsors/bugsee.png" className="img-fluid" />
								</div>
								<div className="prize-content">
									<ul>
										<li>$1000 credits of Bugsee services</li>
									</ul>
								</div>
							</div>
						</div>
					</Container>
				</section>
			</ScrollableAnchor>
        )
    }
}
