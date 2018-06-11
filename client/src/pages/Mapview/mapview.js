import React from "react";
import { Navbarmap } from "../../components/Navbar";
import { Card } from "../../components/Card";
// import LotMarker  from "../../components/Markerstoplot";
// import { Regbtn, Filterbtn, Input} from "../../components/Form";
// import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
// import { geocodeByAddress } from 'react-places-autocomplete';
// import { compose, withProps, withStateHandlers } from 'recompose';
import { Container, Col, Row} from "../../components/Grid";
// import { SavedHouse, Userheader } from "../../components/EachArt";
import { MyMapComponent } from "../../components/Map";
import "./mapview.css";
import { ImageR, ImageS, ImageTop } from "../../components/Image";



class Mapview extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            zip: '',
            allusers: [],
            // lots: [
            //     {
                    // fulladdress: '63 agawam dr wayne NJ 07470'
                // address: `5770 Oxford Moor Blvd.`,
                // latitude: 28.483072,
                // longitude: -81.576246,
                // key: `Snickers`,
                // healthy: `No`,
                // peanutfree: `No`


                // },
                // {
                    // fulladdress: '5770 Oxford Moor Blvd. Windermere FL 34786'
            //     address: `5800 Oxford Moor Blvd.`,    
            //     latitude:  28.482483,
            //     longitude: -81.575999,
            //     key: `Smarties, pretzels`,
            //     healthy: `No`,
            //     peanutfree: `Yes`
            //    }],
            isOpen: false
        }
    }

   

        // {this.setState({all: results.data})}
    // seehealthy = event => {
    //     event.preventDefault();
    //     let yesh = 'Yes';
    //     let healthyzip = this.state.zip;
    //     let treats = 'Yes';
    //     API.getziphealthy(yesh, healthyzip, treats).then(results =>  {this.setState({all: results.data})}
    //     )};   
   

    componentWillMount() {
        this.loadmarkers();
    }

    loadmarkers = () => {
            API.getMarkers().
            then(results => {this.setState({allusers: results.data})}
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
            <Navbarmap
            />
          <Row >
              <Col size="md-3">
              </Col>
              <Col size="md-6">
              
              <h1 className="titleheadf">The Trick-or-Truth Map</h1>
            </Col>
            <Col size="md-3">
            <ImageTop />
            </Col>
           </Row>    
               <Row>
                <Col size="md-1">
                <ImageS />
                </Col>
                 <Col size="md-10">
                 <Card>
            <MyMapComponent 
            isMarkerShown={this.state.isMarkerShown}
            // onMarkerClick={this.handleMarkerClick} 
            // markers={this.state.allusers}
            markers={this.state.allusers} 
            /> 
            </Card>
            </Col>
            <Col size="md-1">
            <ImageR />
            </Col>
                </Row> 
            </Container>
        )
    }
}
export default Mapview;
