import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook';
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';

import "../assets/styles/footer.css";

const Footer = () => (
	<ScrollableAnchor id="contact">
		<footer className="footer">
			<div className="division brand-logo">
				<img className="img-fluid" src="./brand_logo.png" />
			</div>
			<div className="division">IIT (ISM) DHANBAD</div>
			<div className="division">Jharkhand-826004, India</div>
			<div className="division">
				<a href="mailto:contact@hackfest.tech">contact@hackfest.tech</a>
			</div>
			<div className="division">
				<a href="tel:+91-9431516493">+91-7273015060</a>
			</div>
			<div className="division social">
				<a
					className="fb-link"
					href="http://www.facebook.com/hackfestiitism"
				>
					<FontAwesomeIcon icon={faFacebook} />
				</a>
				<a
					className="twitter-link"
					href="http://www.twitter.com/hackfestiitism"
				>
					<FontAwesomeIcon icon={faTwitter} />
				</a>
				<a
					className="insta-link"
					href="http://www.instagram.com/hackfestiitism"
				>
					<FontAwesomeIcon icon={faInstagram} />
				</a>
			</div>
			<div className="division copyright">
				[Developed by{" "}
				<a href="https://www.github.com/anjaneyk06">Anjaney</a>{""}
			  ]
			</div>
		</footer>
	</ScrollableAnchor>
);

export default Footer;
