import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import { compose, withProps, lifecycle } from 'recompose';
import { geocodeByAddress } from 'react-places-autocomplete';

class LotMarker extends React.Component {

    // Constructor.
    constructor(props) {
        // Super Props.
        super(props);
        // State.
        this.state = {
            isOpen: false
        }
    }
    
    onToggleOpen = () => {
        console.log(this);
        this.setState({isOpen: !this.state.isOpen});
    }
    
    
    // Render.
    render() {
    
    // console.log(this);
    
        // Extract Props.
        const {
            props: {
                index,
                lat,
                lng,
                open
            }
        } = this
    
    return (
        <Marker key={index} position={{ lat: lat, lng: lng }} onClick={this.onToggleOpen}>
            {this.state.isOpen && <InfoWindow onCloseClick={this.onToggleOpen}><span>{index}</span></InfoWindow>}
        </Marker>
        )
    }
    }
    
    export default LotMarker;


// export const Markers = props => (

// <Marker
//    {...props}
// position={{ lat: -34.397, lng: 150.644 }}
// onClick={props.onToggleOpen}
// >
// {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
// <p> hello world </p>
// </InfoWindow>}
// </Marker>

// )