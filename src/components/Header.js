import React from 'react';
import solarLogo from '../images/solarLogo.png';
import '../styles/Header.css';

class Header extends React.Component {
  render() {
    return (
      <header>
        <img src={ solarLogo } alt="Logo" className="solar_logo" />
      </header>
    );
  }
}

export default Header;
