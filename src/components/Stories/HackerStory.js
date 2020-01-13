import React from 'react';

export default class HackerStory extends React.Component {
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

	handleClick = () => {
		if(this.state.className == "next"){
			this.props.actions.rotateClockwise();
		}
		else if(this.state.className == "previous"){
			this.props.actions.rotateAntiClockwise();
		}
	}

	render(){
		return(
			<div className={"hacker-story "+"hacker-story--"+this.props.className}>
				<div className="thumb" onClick={this.handleClick}>
					<img src={"./assets/images/testimonials/"+this.props.content.avatar} className="img-fluid" />
				</div>
				<div className="progress-bar"></div>
				<div className="body">
					<div className="hacker-details">
						<strong>{this.props.content.name}</strong>, {this.props.content.designation} @ <a href={this.props.content.link}>{this.props.content.company}</a>
					</div>
					<p>
						{this.props.children}
					</p>
				</div>
			</div>
		);
	}
}
