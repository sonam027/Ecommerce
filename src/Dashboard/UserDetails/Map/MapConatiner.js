import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

class MapConatiner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "React",
      latt: this.props.latt,
      long: this.props.long,
    };


  }

  render() {
    console.log(this.state.latt,this.state.long);
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={2}
          style={mapStyles}
          initialCenter={{
            lat: this.state.latt,
            lng: this.state.long
          }}
        >
         <Marker
          onClick={this.onMarkerClick}
          name={'This is test name'}
        />
        
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD4duKZhbDPjV2eNS8SNMqXfNMiNWxIgC4'
})(MapConatiner);