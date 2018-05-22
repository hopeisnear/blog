import React, { PureComponent } from 'react';

import './style.scss';

class Header extends PureComponent {
  render() {
    return (
      <header className={this.props.className}>
        <div className="container">
          <div className="row">
            <a href="#">&lt; AMAZING Developer &gt;</a>
          </div>
          <nav>
            <ul>
              <li>
              about
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
