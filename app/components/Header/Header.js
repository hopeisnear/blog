import React from 'react';
import { Link } from 'react-router-dom';

import Banner from './images/banner.jpg';
import './style.scss';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <header>
        <div className="container">
          <div className="row">
            <a href="#">&lt; AMAZING Developer &gt;</a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
