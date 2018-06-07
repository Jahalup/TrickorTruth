import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
// s
import { geocodeByAddress } from 'react-places-autocomplete';
import "./marker.css";


class LotMarker extends React.Component {

    // Constructor.
    constructor(props) {
        // Super Props.
        super(props);
        // State.
        this.state = {
            isOpen: false,
            position:''

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
                healthy,
                peanutfree,
                address
            
                
            }
        } = this
    

//  geocodeByAddress(fulladdress).then(results => this.setState({position: results[0].geometry.location})).catch

    return (
        <Marker key={index} position={{lat: lat, lng: lng} } onClick={this.onToggleOpen} icon= 'http://maps.google.com/mapfiles/ms/icons/orange.png'>
            {this.state.isOpen && <InfoWindow onCloseClick={this.onToggleOpen}><span><p style={{color:"orange"}}>{address}</p><p>treat: {index}</p><p> healthy: {healthy}</p><p>peanutfree:{peanutfree}</p></span></InfoWindow>}
        </Marker>
        )
    }
    }
    
    

    export default LotMarker;
    // lat: lat, lng: lng
    // geocodeByAddress(marker.fulladdress).then(results => coord.push(results[0].geometry.location)).then(
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