import React from 'react';
import { Container } from 'reactstrap';

export default class Sponsors extends React.Component{
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
			<section className="sponsors" style={{ minHeight: this.state.windowHeight+'px' }}>
				<Container>
					<h2 className="section-header">Previous Sponsors</h2>
					<div className="sponsors-list">
						<a href="https://www.samsung.com" target="_blank">
							<img src="./assets/images/sponsors/samsung.png" className="img-fluid" />
						</a>
						<a href="https://www.mozilla.org" target="_blank">
							<img src="./assets/images/sponsors/mozilla.PNG" className="img-fluid" />
						</a>
						<a href="https://www.github.com" target="_blank">
							<img src="./assets/images/sponsors/github.png" className="img-fluid" />
						</a>
						<a href="https://www.hackerearth.com" target="_blank">
							<img src="./assets/images/sponsors/hackerearth.png" className="img-fluid" />
						</a>
						<a href="https://www.atkinsglobal.com" target="_blank">
							<img src="./assets/images/sponsors/atkins.png" className="img-fluid" />
						</a>
						<a href="https://www.rosenfeldmedia.com" target="_blank">
							<img src="./assets/images/sponsors/rosenfeld.png" className="img-fluid" />
						</a>
						<a href="https://www.flock.com" target="_blank">
							<img src="./assets/images/sponsors/flock.png" className="img-fluid" />
						</a>
						<a href="https://www.balsamiq.com" target="_blank">
							<img src="./assets/images/sponsors/balsamiq.png" className="img-fluid" />
						</a>
						<a href="https://www.jetbrains.com" target="_blank">
							<img src="./assets/images/sponsors/jetbrains.png" className="img-fluid" />
						</a>
						<a href="https://www.sketchapp.com" target="_blank">
							<img src="./assets/images/sponsors/sketch.png" className="img-fluid" />
						</a>
						<a href="https://www.geeksforgeeks.org" target="_blank">
							<img src="./assets/images/sponsors/geeksforgeeks.png" className="img-fluid" />
						</a>
						<a href="https://www.teqip.in" target="_blank">
							<img src="./assets/images/sponsors/teqip-3.png" className="img-fluid" />
						</a>
						<a href="https://www.vedantalimited.com" target="_blank">
							<img src="./assets/images/sponsors/vedanta.png" className="img-fluid" />
						</a>
						<a href="https://www.jiosaavn.com" target="_blank">
							<img src="./assets/images/sponsors/saavn.png" className="img-fluid" />
						</a>
						<a href="https://www.pepsi.com" target="_blank">
							<img src="./assets/images/sponsors/pepsi.png" className="img-fluid" />
						</a>
						<a href="https://www.nestle.in" target="_blank">
							<img src="./assets/images/sponsors/nestle.png" className="img-fluid" />
						</a>
						<a href="https://www.ntpc.co.in" target="_blank">
							<img src="./assets/images/sponsors/ntpc.png" className="img-fluid" />
						</a>
						<a href="https://www.temboo.com" target="_blank">
							<img src="./assets/images/sponsors/temboo.png" className="img-fluid" />
						</a>
						<a href="https://blog.venturesity.com/" target="_blank">
							<img src="./assets/images/sponsors/venturesity.png" className="img-fluid" />
						</a>
					</div>
				</Container>
			</section>
        )
    }
}
