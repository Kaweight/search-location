import React, { Component } from 'react';
import Geocoder from 'react-mapbox-gl-geocoder';
import { Container, Col, Row } from 'reactstrap';
import './LocationFinder.css'
const mapboxApiKey = 'pk.eyJ1Ijoia2F3ZWlnaHQiLCJhIjoiY2tuMXNlMHZ2MHhuZzJwcXV5M2RheDcyaiJ9.KFqFmepfuGHIb7-wp_1blA'

const params = {
  country: "pl"
}

class LocationFinder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 45.50884,
        longitude: -73.58781,
        zoom: 10
      }
    }
  }

  onSelected = (viewport, item) => {
    this.setState({
      viewport
    })
  }

  render() {
    const { viewport } = this.state;

    return (
      <Row className="py-4">
        <Col xs={2}>
          <Geocoder
            mapboxApiAccessToken={mapboxApiKey}
            onSelected={this.onSelected}
            viewport={viewport}
            hideOnSelect={true}
            value=""
            queryParams={params}
          />
        </Col>
      </Row>
    );
  }
}

export default LocationFinder;