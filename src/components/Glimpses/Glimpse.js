import React from 'react';

export default class Glimpse extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			className: this.props.className
		};
	}

	static getDerivedStateFromProps(nextProps, prevState){
		if(nextProps.className!==prevState.className){
			return { className: nextProps.className };
		}
		else return null;
	}

	render(){
		return(
			<div className={"glimpse "+"glimpse--"+this.props.className}>
				<div className="thumb">
					<img src={"./assets/images/gallery/"+this.props.img} className="img-fluid" />
				</div>
				<div className="progress-bar"></div>
			</div>
		);
	}
}
