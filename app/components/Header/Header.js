import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

export default function Header() {
  return (
    <header className="Header">
      <div className="header__top">
        <div className="header__logo">
          <Link to="/">
            <div>&lt; GOOD developer &gt;</div>
          </Link>
        </div>
        <div className="header__quote">
          <blockquote className="quote">
            Adapt what is useful, reject what is useless, and add what is specifically your own.
          </blockquote>
        </div>
      </div>
    </header>
  );
}
