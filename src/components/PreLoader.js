import React from 'react';

import '../assets/styles/preloader.css';

export default class PreLoader extends React.Component{
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
			<div style={{ minHeight: this.state.windowHeight+'px' }}>
				<img src="/preloader.png" className="preloader img-fluid" />
			</div>
		);
	}
}
