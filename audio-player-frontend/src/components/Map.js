// import React, { Component } from "react"
// import { InfoWindow, withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
// const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");
// // const demoFancyMapStyles = require("./demoFancyMapStyles.json");
// // import {FaAnchor} from 'react-icons/lib/fa/anchor");


// class Map extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isOpen: false,
//             showingInfoWindow: false,
//             activeMarker: {},
//             selectedPlace: {},
//         }

//         // this.onMarkerClick = this.onMarkerClick.bind(this);
//         // this.onMapClicked = this.onMapClicked.bind(this);
//     }

//     // onMarkerClick = (props, marker, e) => {
//     //     console.log(props, marker, e)
//     //     this.setState({
//     //         selectedPlace: props,
//     //         activeMarker: marker,
//     //         showingInfoWindow: true
//     //     });
//     // }

//     // onMapClicked = (props) => {
//     //     if (this.state.showingInfoWindow) {
//     //         this.setState({
//     //             showingInfoWindow: false,
//     //             activeMarker: null
//     //         })
//     //     }
//     // }
//     onToggleOpen = () => {
//         this.setState({
//             isOpen: !this.state.isOpen
//         })
//     }
//     // mapLoaded = (map) => {
//     //     console.log('maploaded', JSON.stringify(map.getCenter()))
//     // }

//     render(){
//         console.log(this.props.venues)
//         let venuesJSX = this.props.venues.map((venue) => {
//             return (<Marker
//                 // onClick={this.onMarkerClick}
//                 // name={`${venue.venue.name}, ${venue.venue.city}, ${venue.venue.region} / ${venue.datetime}`}
//                 position={{
//                     lat: venue.venue.latitude,
//                     lng: venue.venue.longitude
//                 }} ></Marker>)
//         })
//         return <GoogleMap

//                 defaultZoom={1}
//                 defaultCenter={{
//                     lat: 49.2193,
//                     lng: -122.5984
//                 }}>
//                 {/* {props.markers.map((marker,i)=>{
//                     <Marker {...Marker} />
//                 })} */}
//                 {/* {venuesJSX} */}
//             <Marker
//                 position={{ lat: -34.397, lng: 150.644 }}
//                 onClick={this.onMarkerClick}
//             >
//                 <InfoWindow onCloseClick={this.onToggleOpen}>
//                 </InfoWindow>
//             </Marker>
//                 </GoogleMap>
//     }
// }

// export default withGoogleMap(Map)