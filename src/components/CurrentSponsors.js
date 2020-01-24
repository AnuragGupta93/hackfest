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
							
						</div>
						<div className="more">And more on their way ...</div>
					</Container>
				</section>
			</ScrollableAnchor>
		)
	}
}
