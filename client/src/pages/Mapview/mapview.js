import React from "react";
import { Navbarmap } from "../../components/Navbar";
import { Card } from "../../components/Card";
import API from "../../utils/API";
import { Container, Col, Row} from "../../components/Grid";
import { MyMapComponent } from "../../components/Map";
import "./mapview.css";
import { ImageR, ImageS, ImageTop } from "../../components/Image";



class Mapview extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            zip: '',
            allusers: [],
            isOpen: false
        }
    }

   

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
              <Col size="md-3" />
             
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
