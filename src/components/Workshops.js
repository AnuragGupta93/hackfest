import React from "react";
import MediaQuery from "react-responsive";
import { Container, Row, Col } from "reactstrap";
import ScrollableAnchor from "react-scrollable-anchor";

import "../assets/styles/workshops.css";

export default class Workshops extends React.Component {
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
			<ScrollableAnchor id="about">
				<section
					className="about"
					style={{ minHeight: this.state.windowHeight + "px" }}
				>
					<Container>
						<h2 className="section-header">
							Workshops by{" "}
							<a
								href="http://www.codeasylums.com"
								target="_blank"
							>
								CodeAsylums
							</a>
						</h2>
						<Row>
							<Col md={6}>
								<div className="division">
									<h3
										style={{
											textAlign: "center",
											verticalAlign: "center"
										}}
									>
										Day 1
									</h3>
									<h4>Slot 1</h4>
									<ol
										className="cool-list"
										style={{ padding: 25 }}
									>
										<li>Python Programming</li>
										<li>
											Python based scripting application
										</li>
										<li>Data mining</li>
										<li>Cleaning techniques</li>
										<li>Numpy, Pandas</li>
									</ol>
									<h4>Slot 2</h4>
									<ol
										className="cool-list"
										style={{ padding: 25 }}
									>
										<li>
											Machine Learning concepts and
											implementations
										</li>
										<li>Linear and logistic regressions</li>
										<li>Decision trees, KNN, SVM</li>
										<li>Kaggle problems</li>
										<li>Scikit-learn</li>
									</ol>
								</div>
							</Col>
							<Col md={1}>
								<MediaQuery minDeviceWidth={1224}>
									<div
										className="vertical"
										style={{ width: 1, height: 850 }}
									></div>
								</MediaQuery>
							</Col>
							<Col md={5}>
								<div className="division">
									<h3
										style={{
											textAlign: "center",
											verticalAlign: "center"
										}}
									>
										Day 2
									</h3>
									<h4>Slot 3</h4>
									<ol
										className="cool-list"
										style={{ padding: 25 }}
									>
										<li>Scikit-learn in depth</li>
										<li>Hyper parameter tuning</li>
										<li>
											Cross validation and grid search
										</li>
										<li>Dimensionality reductions</li>
										<li>
											Normalisation, Data visualisation
										</li>
									</ol>
									<h4>Slot 4</h4>
									<ol
										className="cool-list"
										style={{ padding: 25 }}
									>
										<li>Unsupervised learning</li>
										<li>K-means</li>
										<li>Image compression</li>
										<li>Basics of neural networks</li>
										<li>
											Future prospects and learning in ML
										</li>
									</ol>
								</div>
							</Col>
						</Row>
					</Container>
				</section>
			</ScrollableAnchor>
		);
	}
}
