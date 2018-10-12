import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';

class SimpleMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tournaments: props.tournaments,
    };
  }

  render() {
    const { location, zoom } = this.props;
    const { tournaments } = this.state;
    return (
      <GoogleMapReact
        center={location}
        defaultZoom={zoom}
      >
        {tournaments.map(tournament => (
          <Marker
            key={tournament.lat}
            lat={tournament.lat}
            lng={tournament.lng}
            name={tournament.name}
          />))}
      </GoogleMapReact>
    );
  }
}

SimpleMap.defaultProps = {
  location: { lat: 50.92, lng: 11.57 }, // Jena
  zoom: 6,
};

Marker.propTypes = {
  text: PropTypes.string.isRequired,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
};


export { SimpleMap as default };
