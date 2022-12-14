import PropTypes from 'prop-types';
import React from 'react';
import '../styles/MissionCard.css';
import Calendar from '../images/Calendar.png';
import Location from '../images/Location.png';
import Flag from '../images/Flag.png';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="mission-card">
        <p data-testid="mission-name" className="mission-name">{name}</p>
        <hr className="mission-divisory" />
        <div className="mission-card-half">

          <p data-testid="mission-year" className="mission-details">
            <img src={ Calendar } alt="Calendar icon" className="mission-icon" />
            {year}
          </p>
          <p data-testid="mission-country" className="mission-details">
            <img src={ Location } alt="Location icon" className="mission-icon" />
            {country}
          </p>
          <p
            data-testid="mission-destination"
            className="mission-details"
          >
            <img src={ Flag } alt="Flag icon" className="mission-icon" />
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
