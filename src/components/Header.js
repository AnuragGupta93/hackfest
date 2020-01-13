import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';

import '../assets/styles/header.css';

export default class Header extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: false,
			initialPosition: 0,
			visibility: '',
			activeSection: ''
		};
	}

	componentDidMount(){
		this.toggleSectionStatus();
		window.addEventListener("hashchange", this.toggleSectionStatus);
	}

	toggleSectionStatus = () => {
		let activeSection = location.hash.split('#')[1];
		this.setState({ activeSection });
	}

	componentWillUnmount(){
		window.removeEventListener("hashchange", this.toggleSectionStatus);
	}

	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render(){
		return(
			<Navbar dark expand="lg" fixed="top" className="navbar">
				<Container>
					<NavbarBrand href="/">
						<img src="./brand_logo.png" width="40" className="img-fluid" />
						&nbsp;&nbsp; HACKFEST<span>, IIT (ISM)</span>
					</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink href="#schedule" className={this.state.activeSection=='schedule' ? 'active' : ''}>SCHEDULE</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="#about" className={this.state.activeSection=='about' ? 'active' : ''}>ABOUT</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="#stories" className={this.state.activeSection=='stories' ? 'active' : ''}>STORIES</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="#sponsors" className={this.state.activeSection=='sponsors' ? 'active' : ''}>SPONSORS</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="#faq" className={this.state.activeSection=='faq' ? 'active' : ''}>FAQ</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="#coordinators" className={this.state.activeSection=='coordinators' ? 'active' : ''}>TEAM</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="#contact" className={this.state.activeSection=='contact' ? 'active' : ''}>CONTACT</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Container>
			</Navbar>
		);
	}
}
