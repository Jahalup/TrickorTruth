import React from "react";
import { Nav } from "../../components/Navbar";
import { Card } from "../../components/Card";
import LotMarker  from "../../components/Markerstoplot";
import { Regbtn, Filterbtn, Input} from "../../components/Form";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import API from "../../utils/API";
import { geocodeByAddress } from 'react-places-autocomplete';
import { compose, withProps, withStateHandlers } from 'recompose';
import { Container, Col, Row} from "../../components/Grid";
import { SavedHouse } from "../../components/EachArt";

const MyMapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyC_8NVMAxrnk_N7O6emZCRjjrCn-7zkcJk",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `500px` }} />,
        mapElement: <div style={{ height: `100%` }} />
    }),
    withScriptjs,
    withGoogleMap
    )((props) =>
    <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: 28.483072, lng:-81.576246 }}
    >

        {props.markers.map((marker, i) => (
            <LotMarker key={marker.key} address={marker.address} index={marker.key} healthy={marker.healthy} peanutfree={marker.peanutfree} lat={marker.latitude} lng={marker.longitude} />
        )
           
        )}
    </GoogleMap>
    );
    
    class Mappage extends React.Component {
    
        constructor(props) {
            super(props);
            this.state = {
                zip: '',
                // coord: [],
                all: [],
                lots: [
                    {
                        // fulladdress: '63 agawam dr wayne NJ 07470'
                    address: `5770 Oxford Moor Blvd.`,
                    latitude: 28.483072,
                    longitude: -81.576246,
                    key: `Snickers`,
                    healthy: `No`,
                    peanutfree: `No`


                    },
                    {
                        // fulladdress: '5770 Oxford Moor Blvd. Windermere FL 34786'
                    address: `5800 Oxford Moor Blvd.`,    
                    latitude:  28.482483,
                    longitude: -81.575999,
                    key: `Smarties, pretzels`,
                    healthy: `No`,
                    peanutfree: `Yes`
                   }],
                isOpen: false
            }
        }

        handleInputChange = event => {
            console.log(event.target);
            const { name, value } = event.target;
            // console.log({name, value});
            console.log([name]);
            this.setState({
                [name]: value
            })
        };
      
        seeall = event => {
            event.preventDefault();
            let zip = this.state.zip;
            API.getzipMarkers(zip).then(results => {this.setState({all: results.data})}
        )};

        seepeanutfree = event => {
            event.preventDefault();
            let peanut = this.state.zip;
            let yeso = "Yes";
            API.getzippeanut(peanut, yeso).then(results => {this.setState({all: results.data})}
            )};
       

        componentWillMount() {
            this.loadmarkers();
        }

        loadmarkers = () => {
                API.getMarkers().then(results => {this.setState({all: results.data})}
                // console.log(results)
                // console.log(this.state.all[0])
            )};
        // componentWillMount() {
        //     base.bindToState('lots', {
        //         context: this,
        //         state: 'lots',
        //         asArray: true,
        //     });
        // }
    
        // handleMarkerClick = (key) => {
        //     console.log(key);
        // }
    
        render() {
            return (
                <Container fluid>
                <Nav />
                   <Row>
                  <Col size="md-4">
                  <h3 style={{fontFamily: 'Fontdiner Swanky', textAlign: 'center', marginTop: "10px"}}>Search By Zip</h3>
                  <form>
                  <Input 
                   value={this.state.zip}
                   type="number"
                   onChange={this.handleInputChange}
                   name="zip"/>
                   <input className="btn btn-warning" style={{margin: "2px"}} type="submit" value="See All" onClick={this.seeall } />
                   <input className="btn btn-warning" type="submit" value="See Peanut Free" onClick={this.seepeanutfree } />
               </form>

                
                  <Card > 
                      <h3 style={{fontFamily: 'Fontdiner Swanky', textAlign: 'center'}}>Local Houses</h3>
                  {this.state.all.map((result, i) => (
                      <SavedHouse
                      key={i}
                      fulladdress={result.fulladdress}
                      healthy={result.healthy}
                      peanutfree={result.peanutfree}
                      treattype={result.treattype}
                      />
                  ))}

                        </Card>
                       </Col>
                    <Col size="md-8" >
                <MyMapComponent
                isMarkerShown={this.state.isMarkerShown}
                // onMarkerClick={this.handleMarkerClick} 
                markers={this.state.lots} 
                />
                </Col>
                    </Row> 
                </Container>
            )
        }
    }
    export default Mappage;
