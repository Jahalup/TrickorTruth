import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import { compose, withProps, lifecycle, withStateHandlers } from 'recompose';
import  LotMarker  from "../Markerstoplot";




export const MyMapComponent = compose(
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
        defaultZoom={10}
        defaultCenter={{ lat: 28.483072, lng:-81.576246 }}
    >

        {props.markers.map((marker, i) => (
           
            <LotMarker address={marker.fulladdress} healthy={marker.healthy} peanutfree={marker.peanutfree} treattype={marker.treattype} codeword={marker.codeword} />
            
        )
           
        )}
    </GoogleMap>
    );
    

