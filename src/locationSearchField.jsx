import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class LocationSearchField extends React.Component {
  constructor(props) {
    super(props);
    this.onPlacesChanged = this.onPlacesChanged.bind(this);
  }

  render() {
    return (
      <label>
        Mein Standort:
        <input ref="input" type="text" />
      </label>
    );
  }

  //When user clicks on city or presses return
  onPlacesChanged(a) {
    console.log(this.searchBox.getPlaces());
    const results = this.searchBox.getPlaces();
    // hard coded use first result
    if (results.length > 0) {
      const lat = results[0].geometry.location.lat();
      const lng = results[0].geometry.location.lng();
      this.props.handleSetLocation({ lat, lng });
    }
  }

  componentDidMount() {
    var input = ReactDOM.findDOMNode(this.refs.input);
    this.searchBox = new google.maps.places.SearchBox(input);
    this.searchBox.addListener('places_changed', this.onPlacesChanged);
  }

  componentWillUnmount() {
    // https://developers.google.com/maps/documentation/javascript/events#removing
    google.maps.event.clearInstanceListeners(this.searchBox);
  }
}

LocationSearchField.propTypes = {
  handleSetLocation: PropTypes.func.isRequired,
};

export { LocationSearchField as default };
