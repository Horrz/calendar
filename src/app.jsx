import React from 'react';
import ReactDOM from 'react-dom';
import SimpleMap from './map';
import Navigation from './navigation';
import LocationSearchField from './locationSearchField';
import generateDemoDate from './testUtils';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tournaments: generateDemoDate(),
      location: { lat: 50.92, lng: 11.57 },
    };
    this.handleSetLocation = this.handleSetLocation.bind(this);
  }

  handleSetLocation(location) {
    this.setState(() => {
      return {
        location: location,
      }
    });
  }

  render() {
    const { tournaments, location } = this.state;
    return (
      <div className="col-12">
        <h1>
        Go Tournaments
        </h1>
        <LocationSearchField handleSetLocation={this.handleSetLocation} />
        <div className="col-4">
          <Navigation tournaments={tournaments} location={location} />
        </div>
        <div className="col-8">
          <SimpleMap tournaments={tournaments} location={location} />
        </div>
      </div>
    );
  }
}

const a = (<App />);


ReactDOM.render(a, document.getElementById('app'));
