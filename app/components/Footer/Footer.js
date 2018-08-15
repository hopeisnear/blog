import React from 'react';

import './Footer.scss';

export default function Footer() {
  return (
    <footer className="Footer">
      <section>
        <div className="footer__note">
          Made with
          <span role="img" aria-label="heart-emoji">❤️</span>
          by Rafal Szczepankiewicz
        </div>
      </section>
    </footer>
  );
}
