import React from 'react';

import '../assets/styles/scrollhinter.css';

export default class ScrollHinter extends React.Component{
	constructor(){
		super();
		this.state = {
			display: 'initial'
		};
	}

	componentDidMount(){
		this.updateVisibility();
		window.addEventListener('scroll', this.updateVisibility);
	}

	updateVisibility = () => {
		if(window.scrollY > 50){
			this.setState({ display: 'none' });
		}
	}

	componentWillUnmount(){
		window.removeEventListener('scroll', this.updateVisibility);
	}

    render(){
        return(
            <a href="#" className="scroll" style={{ display: this.state.display }}></a>
        );
    }
}
