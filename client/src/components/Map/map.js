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
        defaultZoom={15}
        defaultCenter={{ lat: 28.483072, lng:-81.576246 }}
    >

        {props.markers.map((marker, i) => (
            <LotMarker key={marker.key} address={marker.address} index={marker.key} healthy={marker.healthy} peanutfree={marker.peanutfree} lat={marker.latitude} lng={marker.longitude} />
        )
           
        )}
    </GoogleMap>
    );
    

// export const MyMapComponent =
// compose(
//     withProps({
//         googleMapURL: "https://maps.googleapis.com/maps/api/js?key=xxxxx&v=3.exp&libraries=geometry,drawing,places",
//         loadingElement: <div style={{ height: `100%` }} />,
//         containerElement: <div style={{ height: `500px` }} />,
//         mapElement: <div style={{ height: `100%` }} />,
//     }),
//     withScriptjs,
//     withGoogleMap
//     )((props) =>
//     <GoogleMap
//         defaultZoom={15}
//         defaultCenter={{ lat: 34.6781445, lng: -82.8455519 }}
//     >


    
//         {props.markers.map(marker => (
//             <LotMarker key={marker.key} index={marker.key} lat={marker.latitude} lng={marker.longitude} />
//         ))}
//     </GoogleMap>
//     );