import React from 'react';

import '../assets/styles/progress.css';

export default class Progress extends React.Component {

    componentDidMount(){
		window.addEventListener("scroll", this.onScroll);
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.onScroll);
	}

    onScroll = () => {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        document.getElementById("scroll").style.width = scrolled + "%";
	}

    render(){
        return (
			<div className="progress-container">
				<div className="progress-bar" id="scroll"></div>
			</div>
        );
    }
}
