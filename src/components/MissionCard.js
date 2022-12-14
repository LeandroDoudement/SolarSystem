import PropTypes from 'prop-types';
import React from 'react';
import '../styles/MissionCard.css';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="mission-card">
        <p data-testid="mission-name" className="mission-name">{name}</p>
        <div className="mission-card-half">
          <p data-testid="mission-year" className="mission-details">{year}</p>
          <p data-testid="mission-country" className="mission-details">{country}</p>
          <p
            data-testid="mission-destination"
            className="mission-details"
          >
            {destination}

          </p>
        </div>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
