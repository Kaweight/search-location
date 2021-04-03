import React, { PureComponent } from 'react';
import ReactMapGL from 'react-map-gl';
import Geocoder from 'react-mapbox-gl-geocoder';
import { Container, Col, Row } from 'reactstrap';

const mapStyle = {
  width: '100%',
  height: 600
}

const mapboxApiKey = 'pk.eyJ1Ijoia2F3ZWlnaHQiLCJhIjoiY2tuMXNlMHZ2MHhuZzJwcXV5M2RheDcyaiJ9.KFqFmepfuGHIb7-wp_1blA'

const params = {
  country: "pl"
}

class LocationFinder extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 45.50884,
        longitude: -73.58781,
        zoom: 15
      }
    };

  }

  onSelected = (viewport, item) => {
    this.setState({
      viewport
    })
  }

  render() {
    const { viewport } = this.state;
    return (
      <Container fluid={true}>
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
        <Row>
          <Col>
            <ReactMapGL
              mapboxApiAccessToken={mapboxApiKey}
              mapStyle="mapbox://styles/mapbox/streets-v11"
              {...viewport}
              {...mapStyle}
              onViewportChange={(viewport) => this.setState({ viewport })}
            >
            </ReactMapGL>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LocationFinder;