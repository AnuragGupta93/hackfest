import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Container } from 'reactstrap';
import ScrollableAnchor from 'react-scrollable-anchor';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Location extends Component {
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
    static defaultProps = {
        center: {
            lat: 23.815042,
            lng: 86.441182
        },
        zoom: 15
    };

    
    renderMarkers(map, maps) {
        let marker = new maps.Marker({
          position: {lat: 23.815042, lng: 86.441182},
          map,
          title: 'Hello World!'
        });
      }

    render() {
        return (

            <ScrollableAnchor id="location">
                <section className="location" style={{ minHeight: this.state.windowHeight + 'px' }}>
                    <Container>
                        <h2 className="section-header">Location</h2>
                        <div style={{ height: '75vh', width: '100%',padding: 20 }}>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: "AIzaSyDZxh_P-h-vOYoXc0wxrMPcBOBhVkgUPxk" }}
                                defaultCenter={this.props.center}
                                defaultZoom={this.props.zoom} 
                                onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps)}
                            >
                                <AnyReactComponent
                                    lat={23.815042}
                                    lng={86.441182}
                                    text={'Penman Auditorium'}
                                />
                            </GoogleMapReact>
                        </div>
                    </Container>
                </section>
            </ScrollableAnchor>

        );
    }
}

export default Location;