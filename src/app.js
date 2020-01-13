import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import PreLoader from './components/PreLoader';
import ScrollHinter from './components/ScrollHinter';
import Progress from './components/Progress';
import Gear from './components/Gear';
import Header from './components/Header';
import Hero from './components/Hero';
import Schedule from './components/Schedule/Schedule';
import Workshops from './components/Workshops';
import About from './components/About';
import Aims from './components/AimsList';
import Glimpses from './components/Glimpses/Carousel';
import Carousel from './components/Stories/Carousel';
import Prizes from './components/Prizes';
import CurrentSponsors from './components/CurrentSponsors';
import Sponsors from './components/Sponsors';
import FAQ from './components/FAQDropdown/Faq';
import Faculty from './components/Faculty/Faculty';
import Coordinators from './components/Coordinators/Coordinators';
import Location from './components/Location'
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/main.css';

const HomePage = () => (
	<div>
		<ScrollHinter />
		<Header />
		<Progress />
		<Hero />
		<Gear color="yellow" top="-140px" right="-115px" scale={2} speed={-1} />
		<Gear color="red" top="-10px" right="100px" speed={1.5} />
		<Schedule />
		{/* <Workshops /> */}
		<About />
		<Gear color="red" top="-35px" right="35px" scale={1} speed={-2} />
		<Gear color="blue" top="40px" right="100px" scale={1.5} speed={1.5} />
		<Gear color="yellow" top="135px" right="-90px" scale={2} speed={-1} />
		<Aims />
		<Glimpses />
		<Gear color="blue" top="-130px" left="-55px" scale={1.5} speed={1} />
		<Gear color="green" top="-90px" left="110px" scale={1} speed={-1.5} />
		<Gear color="yellow" top="-60px" left="140px" scale={0.5} speed={-1.5} />
		<Gear color="red" top="-100px" left="210px" scale={0.5} speed={2} />
		<Carousel />
		<Gear color="blue" top="-100px" right="-50px" scale={2} speed={1} />
		<Gear color="green" top="400px" left="-10px" scale={1} />
		<Prizes />
		<Gear color="yellow" top="-50px" right="-50px" scale={1.5} />
		<Gear color="red" top="400px" left="-10px" scale={1} />
		<Gear color="green" top="500px" left="60px" scale={0.5} speed={2} />
		<CurrentSponsors />
		<Gear color="blue" top="-90px" left="-40px" scale={1.5} speed={1} />
		<Gear color="yellow" top="250px" right="-10px" scale={1} />
		<Gear color="red" top="450px" left="-10px" scale={1} />
		<FAQ />
		<Gear color="green" top="-90px" right="-40px" scale={2} speed={-1} />
		<Faculty />
		<Gear color="yellow" top="-100px" left="-40px" scale={1.5} speed={1} />
		<Coordinators />		
		<Gear color="blue" top="-100px" right="-50px" scale={2} speed={1} />
		<Gear color="green" top="400px" left="-10px" scale={1} />
		<Gear color="red" top="650px" right="-40px" scale={1.5} />
		<Gear color="yellow" top="900px" left="-40px" scale={1.5} speed={-1} />
		<Sponsors />
		<Location />
		<Footer />
	</div>
);

class App extends React.Component{
	constructor(){
		super();
		this.state = {
			loading: true
		};
	}

	componentDidMount(){
		setTimeout(() => {
			this.setState({ loading: false });
		}, 2000)
	}

	render(){
		const duration = {
			enter: 500,
			exit: 1000
		};
		return(
			<TransitionGroup style={{ position: 'relative', height: this.state.height, overflowX: 'hidden' }}>
				{this.state.loading && <CSSTransition
					key={1}
					timeout={duration}
					classNames="fade"
				>
					<PreLoader />
				</CSSTransition>}
				{!this.state.loading && <CSSTransition
					key={2}
					timeout={duration}
					classNames="fade"
				>
					<HomePage />
				</CSSTransition>}
			</TransitionGroup>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
