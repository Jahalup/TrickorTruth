import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
// s
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import "./marker.css";


class LotMarker extends React.Component {

    // Constructor.
    constructor(props) {
        // Super Props.
        super(props);
        // State.
        this.state = {
            isOpen: false,
            position:'',
            address:'',
            error:'',
            lat:'',
            lng:'',
            

        }
    }
    
    onToggleOpen = () => {
        console.log(this);
        this.setState({isOpen: !this.state.isOpen});
    }
   
    

    componentWillMount = () => {
        this.convertaddress()
    }

convertaddress = () => {

    console.log(this.props.address)
    geocodeByAddress(this.props.address).then(results => getLatLng(results[0]))
    .then(latLng => this.setState({position:latLng}))
    .catch(error => console.error('Error', error))
}




    // console.log(this.props.address)
//     geocodeByAddress(this.props.address).then(response => {
//         console.log(response);
//         console.log(response[0].geometry.location.lat());
        
//     this.setState({
//         position: response.data.results[0].geometry.location
       
//     })
//    console.log(this.state.lat);
//  }).catch((error) => { // catch is called after then
//    this.setState({ error: error.message })
//  });
// }
        
//    componentDidMount = () => {
//        console.log(this.state.lat);
//    } 

// fetch(url).then((responseText) => {
// var response = responseText.json();

//         response.then(function(response){
//             this.setState({ attachment: response });
//         });
//     }.bind(this));
// .then((responseText) => responseText.json())
//         .then((response) => this.setState(response));
   

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
                address,
                codeword,
                treattype
            
                
            }
        } = this
    

//  geocodeByAddress(fulladdress).then(results => this.setState({position: results[0].geometry.location})).catch
return (
    <Marker  position={this.state.position} onClick={this.onToggleOpen} icon= 'http://maps.google.com/mapfiles/ms/icons/orange.png'>
        {this.state.isOpen && <InfoWindow onCloseClick={this.onToggleOpen}><span><p id="addresshead">{address}</p><p className="eachlabel"> healthy:{'  '} {healthy}</p>
        <p className="eachlabel">peanutfree:{'  '}{peanutfree}</p><p className="eachlabel">treat:{'  '}{treattype}</p><p className="eachlabel">code:{'  '}{codeword}</p></span></InfoWindow>}
    </Marker>
    )
}
}
    // return (
    //     <Marker key={index} position={{lat: lat, lng: lng} } onClick={this.onToggleOpen} icon= 'http://maps.google.com/mapfiles/ms/icons/orange.png'>
    //         {this.state.isOpen && <InfoWindow onCloseClick={this.onToggleOpen}><span><p style={{color:"orange"}}>{address}</p><p>treat: {index}</p><p> healthy: {healthy}</p><p>peanutfree:{peanutfree}</p></span></InfoWindow>}
    //     </Marker>
    //     )
    // }
    // }
    
    

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