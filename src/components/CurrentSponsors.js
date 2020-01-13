import React from 'react';
import { Container } from 'reactstrap';
import ScrollableAnchor from 'react-scrollable-anchor';

import '../assets/styles/sponsors.css';

export default class CurrentSponsors extends React.Component {
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
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.updateDimensions);
	}

	render() {
		return (
			<ScrollableAnchor id="sponsors">
				<section className="sponsors" style={{ minHeight: this.state.windowHeight + 'px' }}>
					<Container>
						<h2 className="section-header">Current Sponsors</h2>
						<div className="sponsors-list">
							<a href="https://www.walmart.com/" target="_blank">
								<img src="./assets/images/sponsors/walmart.png" className="img-fluid" />
							</a>
							<a href="https://www.techgig.com/" target="_blank">
								<img src="./assets/images/sponsors/techgig.png" className="img-fluid" />
							</a>
							<a href="http://www.codeasylums.com/" target="_blank">
								<img src="./assets/images/sponsors/codeasylums.JPG" className="img-fluid" />
							</a>
							<a href="https://devfolio.co/" target="_blank">
								<img src="./assets/images/sponsors/devfolio.png" className="img-fluid" />
							</a>
							<a href="https://www.womentechmakers.com//" target="_blank">
								<img src="./assets/images/sponsors/womentechmakers.png" className="img-fluid" />
							</a>
							<a href="https://hirescript.in/" target="_blank">
								<img src="./assets/images/sponsors/hirescript.jpg" className="img-fluid" />
							</a>
							<a href="https://matic.network/" target="_blank">
								<img src="./assets/images/sponsors/matic.png" className="img-fluid" />
							</a>
							<a href="https://www.digitalocean.com" target="_blank">
								<img src="./assets/images/sponsors/digital-ocean.png" className="img-fluid" />
							</a>
							<a href="https://www.wikimedia.org/" target="_blank">
								<img src="./assets/images/sponsors/wikimedia.jpg" className="img-fluid" />
							</a>
							<a href="https://www.bugsee.com" target="_blank">
								<img src="./assets/images/sponsors/bugsee.png" className="img-fluid" />
							</a>
							<a href="https://www.wolframalpha.com/" target="_blank">
								<img src="./assets/images/sponsors/wolfram.png" className="img-fluid" />
							</a>
							<a href="https://zulipchat.com/" target="_blank">
								<img src="./assets/images/sponsors/zulip.png" className="img-fluid" />
							</a>
							<a href="https://cloudsploit.com/" target="_blank">
								<img src="./assets/images/sponsors/cloudsploit.png" className="img-fluid" />
							</a>
							<a href="https://www.creative-tim.com" target="_blank">
								<img src="./assets/images/sponsors/creative-tim.png" className="img-fluid" />
							</a>
							<a href="https://www.grabon.in/" target="_blank">
								<img src="./assets/images/sponsors/grabon.jpg" className="img-fluid" />
							</a>
							<a href="https://skillenza.com/" target="_blank">
								<img src="./assets/images/sponsors/skillenza.png" className="img-fluid" />
							</a>
							<a href="https://www.olacabs.com/" target="_blank">
								<img src="./assets/images/sponsors/ola.png" className="img-fluid" />
							</a>
							<a href="https://challengerocket.com/" target="_blank">
								<img src="./assets/images/sponsors/challengerocket.png" className="img-fluid" />
							</a>
						</div>
						<div className="more">And more on their way ...</div>
					</Container>
				</section>
			</ScrollableAnchor>
		)
	}
}
