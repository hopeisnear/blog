import React, { PureComponent } from 'react';
import { string } from 'prop-types';
import classNames from 'classnames';

import './style.scss';

class Header extends PureComponent {
  static propTypes = {
    className: string
  };

  static defaultProps = {
    className: ''
  };

  render() {
    return (
      <header className={classNames(this.props.className, 'app-header')}>
        <div>
          <div>
            <div className="header-top">
              <div className="header-logo">
                <a href="#">&lt; AMAZING Developer &gt;</a>
              </div>
              <nav className="header-top-nav">
                <ul className="nav-bar-elements">
                  <li>
                    Login
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <nav className="page-menu-nav">
            <div className="page-menu">
              <ul className="nav-bar-elements">
                <li>
                  about
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
