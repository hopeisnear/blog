import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

export default function Header() {
  return (
    <header className="Header">
      <div className="header__top">
        <div className="header__logo">
          <Link to="/">&lt; GOOD Developer &gt;</Link>
        </div>
        <div>
          <blockquote className="header__quote">
            Adapt what is useful, reject what is useless, and add what is specifically your own.
          </blockquote>
        </div>
      </div>
    </header>
  );
}
