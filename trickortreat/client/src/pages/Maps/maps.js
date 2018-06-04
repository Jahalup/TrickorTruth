import React, { Component } from "react";
import { Nav } from "../../components/Navbar";
import { Container} from "../../components/Grid";
import { MyMapComponent } from "../../components/Map";



class Mappage extends Component {
    render() {
        return (
          <Container  fluid>
           <Nav />

           <MyMapComponent
           isMarkerShown
           googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
           loadingElement={<div style={{ height: `100%` }} />}
           containerElement={<div style={{ height: `400px` }} />}
           mapElement={<div style={{ height: `100%` }} />} />
           </Container>

        )}
    }

    export default Mappage;