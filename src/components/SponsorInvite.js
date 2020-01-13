import React from 'react';
import Rodal from 'rodal';
import { Container } from 'reactstrap';

import '../assets/styles/sponsor_invite.css'
import 'rodal/lib/rodal.css';

export default class SponsorInvite extends React.Component{
	constructor(){
		super();
		this.state = {
			modalIsOpen: false
		}
	}

	openModal = () => {
		this.setState({ modalIsOpen: true });
	}

	closeModal = () => {
		this.setState({ modalIsOpen: false });
	}

    render(){
        return(
            <Container className="sponsor-invite-body container">
                <div className="sponsor-invite-div ij-effect-9">
                    <a className="sponsor-invite-link" href="#" onClick={this.openModal}><span>Want to sponsor us ?</span><span>Click to know how.</span></a>
                </div>

				<Rodal
					visible={this.state.modalIsOpen}
					onClose={this.closeModal}
					closeOnEsc={true}
					animation="slideUp"
				>
					<div className="modal-content__container">
						<h5>Want to sponsor HackFest 2019?</h5>
						<div>
							E-mail us: <a href="mailto:contact@hackfest.tech">sponsor@hackfest.in</a>
						</div>
						<div>
							Contact us: <a href="tel:+91-9431516493">+91-9431516493</a>
						</div>
						<div style={{ marginTop: '20px', textAlign: 'center' }}>
							<a href="/assets/Brochure_HF.pdf" download="HackFest.pdf">Get our brochure here.</a>
						</div>
					</div>
				</Rodal>
            </Container>
        );
    }
}
