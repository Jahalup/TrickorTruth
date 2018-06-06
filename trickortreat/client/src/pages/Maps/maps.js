import React, { Component } from "react";
import { Nav } from "../../components/Navbar";
import { Card } from "../../components/Card";
import LotMarker  from "../../components/Markerstoplot";
import { Regbtn } from "../../components/Form";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import API from "../../utils/API";
import { geocodeByAddress } from 'react-places-autocomplete'
import { compose, withProps, withStateHandlers } from 'recompose';
import { Container, Col, Row} from "../../components/Grid";

const MyMapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyC_8NVMAxrnk_N7O6emZCRjjrCn-7zkcJk",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `500px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
    )((props) =>
    <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: 34.6781445, lng: -82.8455519 }}
    >
        {props.markers.map(marker => (
            
            <LotMarker key={marker.key} index={marker.key} lat={marker.latitude} lng={marker.longitude} />
           
        ))}
    </GoogleMap>
    );
    
    class TheMap extends React.PureComponent {
    
        constructor(props) {
            super(props);
            this.state = {
                test:'test',
                lots: [
                    {latitude: 25.0112183,
                     longitude: 121.52067570000001,
                     key: `Taiwan`
                    },
                    {
                    latitude:  39.9042,
                    longitude: 116.4074,
                    key: `Beijing`
                   }],
                isOpen: false
            };
        }
      
        // componentWillMount() {
        //     base.bindToState('lots', {
        //         context: this,
        //         state: 'lots',
        //         asArray: true,
        //     });
        // }
    
        handleMarkerClick = (key) => {
            console.log(key);
        }
    
        render() {
            return (
                <Container  fluid>
                         <Nav />
                   <Row>
                  <Col size="md-4">
                  <Card> 
                        <p>This is where the db data will go</p>
                        </Card >
                       </Col>
                    <Col size="md-8" style={{float: "right"}}>
                <MyMapComponent
                isMarkerShown={this.state.isMarkerShown}
                onMarkerClick={this.handleMarkerClick} 
                markers={this.state.lots} 
                />

                </Col>
          </Row>
            <Regbtn 
                
            />
          </Container>
            )
        }
    }
    export default TheMap;



// class Mappage extends Component {
   
//     changeaddress = () => {
//         geocodeByAddress('5770 oxford moor')
//   .then(results => console.log(results[0].geometry.location.lat() + "and" + results[0].geometry.location.lng() ) )
                   

//   .catch(error => console.error(error))
//     }

    // state = {
    //     Mappage: [{
    //         position:{
    //           lat: 255.0112183,
    //           lng:121.52067570000001,
    //         }
    //       }]
    // };
  
    // componentWillMount() {
    //     this.loadmarkers();
    // }

    // loadmarkers = () => {
    //     API.getMarkers().then(results => {this.setState({Mappage: results.data})
    //     console.log(results);
    //     console.log();
    // })
       
    // };


    


//     render() {
//         return (
//           <Container  fluid>
//            <Nav />
//            <Row>
//          <Col size="md-4">
//          <Card> 
//              <p>This is where the db data will go</p>
//              </Card >
//          </Col>
//          <Col size="md-8" style={{float: "right"}}>
//            <MyMapComponent 
      
//            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyC_8NVMAxrnk_N7O6emZCRjjrCn-7zkcJk"
//            loadingElement={<div style={{ height: `100%` }} />}
//            containerElement={<div style={{ height: `400px` }} />}
//            mapElement={<div style={{ height: `100%` }} />}
//            ptag="Hello there" 
//            latitude={-34.397}
//            longitude={ 150.644}
//            }

       
           
//          >
// //  {/* {this.state.Mappage.map((marker, i) =>(
            


                
// //                 <Marker
// //                 lat = {marker.lat}
// //                 lng = {marker.lng}
               
// //               >

// //               </Marker>
                
// //              )
// //             )} */}

// //          </MyMapComponent>
// //          </Col>
// //          </Row>
// //             <Regbtn 
                
//             />
//            </Container>

//         )}
//     }

//     export default Mappage;