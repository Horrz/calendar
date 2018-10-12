import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

class Marker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
      lat: props.lat,
      lng: props.lng,
    };
  }

  render() {
    return <FontAwesomeIcon icon={faMapMarkerAlt} color="red" on={(e) => this.handleClick(e)} />;
  }

  handleClick() {
    const { text, lat, lng } = this.state;
    console.log(`${text}, ${lat}, ${lng}`);
  }
}
Marker.propTypes = {
  text: PropTypes.string.isRequired,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
};

export { Marker as default };
