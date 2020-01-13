import React from 'react';

import '../assets/styles/gear.css';

export default class Gear extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			rotationAngle: 0
		}
	}

	componentDidMount(){
		window.addEventListener("scroll", this.calculateRotationAngle);
	}

	calculateRotationAngle = () => {
		const { speed } = this.props;
		let pos = window.scrollY;
		this.setState({ rotationAngle: (speed || 0)*pos/8 });
	}

	componentWillUnmount(){
		window.removeEventListener("scroll", this.calculateRotationAngle);
	}

    render(){
		const { color, top, left, right, scale } = this.props;

        return(
            <div className="gear__container">
                <img src={'./assets/images/gears/'+color+'.png'} className="gear" style={{ top: (top || '0'), left: (left || 'auto'), right: (right || 'auto'), width: ((scale || 1)*115)+'px', transform: 'rotate('+this.state.rotationAngle+'deg)' }} />
            </div>
        );
    }
}
