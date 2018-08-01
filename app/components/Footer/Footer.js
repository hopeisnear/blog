import React from 'react';
import { string } from 'prop-types';
import classNames from 'classnames';

import './style.scss';

const Footer = (props) => (
  <footer className={classNames(props.className, 'app-footer')}>
    <section>
      <div className="footer-note">
        Made with <span role="img" aria-label="heart-emoji">❤️</span> by Rafal Szczepankiewicz
      </div>
    </section>
  </footer>
);

export default Footer;
