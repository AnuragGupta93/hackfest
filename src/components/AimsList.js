import React from 'react';
import { Container} from 'reactstrap';

import '../assets/styles/aims.css';

export default class Aims extends React.Component{
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
            <section className="aims-list" style={{ minHeight: this.state.windowHeight+'px' }}>
                <Container>
                    <h2 className="section-header">Our Goals</h2>
                    <ol className="cool-list">
                        <li>
                            <p>Promote <strong>out-of-the-box</strong> thinking.</p>
                        </li>
                        <li>
                            <p>Becoming the <strong> center of tech community </strong> in India.</p>
                        </li>
                        <li>
                            <p>Hosting  <strong> acclaimed speaker </strong> sessions.</p>
                        </li>
                        <li>
                            <p>Support the innovators with <strong>resources and mentorship. </strong></p>
                        </li>
                        <li>
                            <p><strong>Collaborate with companies </strong> to solve real problems. </p>
                        </li>
                        <li>
                            <p>Contribute to the <strong>open source community.</strong></p>
                        </li>
                        <li>
                            <p>Solve major problems of the society by providing  <strong>smart tech-related solutions</strong></p>
                        </li>
                    </ol>
                </Container>
            </section>
        );
    }
}
