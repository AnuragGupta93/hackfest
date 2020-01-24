import React from "react";
import { Container } from "reactstrap";

export default class Sponsors extends React.Component {
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
			<section
				className="sponsors"
				style={{ minHeight: this.state.windowHeight + "px" }}
			>
        
				<Container>
					<h2 className="section-header">Previous Sponsors</h2>
					<div className="sponsors-list">
						<a href="https://www.walmart.com/" target="_blank">
							<img
								src="./assets/images/sponsors/walmart.png"
								className="img-fluid"
							/>
						</a>
						<a href="https://www.techgig.com/" target="_blank">
							<img
								src="./assets/images/sponsors/techgig.png"
								className="img-fluid"
							/>
						</a>
						<a href="http://www.codeasylums.com/" target="_blank">
							<img
								src="./assets/images/sponsors/codeasylums.JPG"
								className="img-fluid"
							/>
						</a>
						<a href="https://devfolio.co/" target="_blank">
							<img
								src="./assets/images/sponsors/devfolio.png"
								className="img-fluid"
							/>
						</a>
						<a
							href="https://www.womentechmakers.com//"
							target="_blank"
						>
							<img
								src="./assets/images/sponsors/womentechmakers.png"
								className="img-fluid"
							/>
						</a>
						<a href="https://hirescript.in/" target="_blank">
							<img
								src="./assets/images/sponsors/hirescript.jpg"
								className="img-fluid"
							/>
						</a>
						<a href="https://matic.network/" target="_blank">
							<img
								src="./assets/images/sponsors/matic.png"
								className="img-fluid"
							/>
						</a>
						<a href="https://www.digitalocean.com" target="_blank">
							<img
								src="./assets/images/sponsors/digital-ocean.png"
								className="img-fluid"
							/>
						</a>
						<a href="https://www.wikimedia.org/" target="_blank">
							<img
								src="./assets/images/sponsors/wikimedia.jpg"
								className="img-fluid"
							/>
						</a>
						<a href="https://www.bugsee.com" target="_blank">
							<img
								src="./assets/images/sponsors/bugsee.png"
								className="img-fluid"
							/>
						</a>
						<a href="https://www.wolframalpha.com/" target="_blank">
							<img
								src="./assets/images/sponsors/wolfram.png"
								className="img-fluid"
							/>
						</a>
						<a href="https://zulipchat.com/" target="_blank">
							<img
								src="./assets/images/sponsors/zulip.png"
								className="img-fluid"
							/>
						</a>
						<a href="https://cloudsploit.com/" target="_blank">
							<img
								src="./assets/images/sponsors/cloudsploit.png"
								className="img-fluid"
							/>
						</a>
						<a href="https://www.creative-tim.com" target="_blank">
							<img
								src="./assets/images/sponsors/creative-tim.png"
								className="img-fluid"
							/>
						</a>
						<a href="https://www.grabon.in/" target="_blank">
							<img
								src="./assets/images/sponsors/grabon.jpg"
								className="img-fluid"
							/>
						</a>
						<a href="https://skillenza.com/" target="_blank">
							<img
								src="./assets/images/sponsors/skillenza.png"
								className="img-fluid"
							/>
						</a>
						<a href="https://www.olacabs.com/" target="_blank">
							<img
								src="./assets/images/sponsors/ola.png"
								className="img-fluid"
							/>
						</a>
						<a href="https://challengerocket.com/" target="_blank">
							<img
								src="./assets/images/sponsors/challengerocket.png"
								className="img-fluid"
							/>
						</a>
						<a href="https://www.samsung.com" target="_blank">
							<img
								src="./assets/images/sponsors/samsung.png"
								className="img-fluid"
							/>
						</a>
						<a href="https://www.mozilla.org" target="_blank">
							<img
								src="./assets/images/sponsors/mozilla.PNG"
								className="img-fluid"
							/>
						</a>
						<a href="https://www.github.com" target="_blank">
							<img
								src="./assets/images/sponsors/github.png"
								className="img-fluid"
							/>
						</a>
						<a href="https://www.hackerearth.com" target="_blank">
							<img
								src="./assets/images/sponsors/hackerearth.png"
								className="img-fluid"
							/>
						</a>
						<a href="https://www.atkinsglobal.com" target="_blank">
							<img
								src="./assets/images/sponsors/atkins.png"
								className="img-fluid"
							/>
						</a>
						<a
							href="https://www.rosenfeldmedia.com"
							target="_blank"
						>
							<img
								src="./assets/images/sponsors/rosenfeld.png"
								className="img-fluid"
							/>
						</a>
						<a href="https://www.flock.com" target="_blank">
							<img
								src="./assets/images/sponsors/flock.png"
								className="img-fluid"
							/>
						</a>
						<a href="https://www.balsamiq.com" target="_blank">
							<img
								src="./assets/images/sponsors/balsamiq.png"
								className="img-fluid"
							/>
						</a>
						<a href="https://www.jetbrains.com" target="_blank">
							<img
								src="./assets/images/sponsors/jetbrains.png"
								className="img-fluid"
							/>
						</a>
						<a href="https://www.sketchapp.com" target="_blank">
							<img
								src="./assets/images/sponsors/sketch.png"
								className="img-fluid"
							/>
						</a>
						<a href="https://www.geeksforgeeks.org" target="_blank">
							<img
								src="./assets/images/sponsors/geeksforgeeks.png"
								className="img-fluid"
							/>
						</a>
						<a href="https://www.teqip.in" target="_blank">
							<img
								src="./assets/images/sponsors/teqip-3.png"
								className="img-fluid"
							/>
						</a>
						<a
							href="https://www.vedantalimited.com"
							target="_blank"
						>
							<img
								src="./assets/images/sponsors/vedanta.png"
								className="img-fluid"
							/>
						</a>
						<a href="https://www.jiosaavn.com" target="_blank">
							<img
								src="./assets/images/sponsors/saavn.png"
								className="img-fluid"
							/>
						</a>
						<a href="https://www.pepsi.com" target="_blank">
							<img
								src="./assets/images/sponsors/pepsi.png"
								className="img-fluid"
							/>
						</a>
						<a href="https://www.nestle.in" target="_blank">
							<img
								src="./assets/images/sponsors/nestle.png"
								className="img-fluid"
							/>
						</a>
						<a href="https://www.ntpc.co.in" target="_blank">
							<img
								src="./assets/images/sponsors/ntpc.png"
								className="img-fluid"
							/>
						</a>
						<a href="https://www.temboo.com" target="_blank">
							<img
								src="./assets/images/sponsors/temboo.png"
								className="img-fluid"
							/>
						</a>
						<a href="https://blog.venturesity.com/" target="_blank">
							<img
								src="./assets/images/sponsors/venturesity.png"
								className="img-fluid"
							/>
						</a>
					</div>
				</Container>
			</section>
		);
	}
}
