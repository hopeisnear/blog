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
        <h2 className="title">
          <a href="#">&lt; AMAZING Developer &gt;</a>
        </h2>
        <nav className="nav-bar">
          <ul className="nav-bar-elements">
            <li>
            about
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
