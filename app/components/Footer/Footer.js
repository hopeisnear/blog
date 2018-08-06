import React from 'react';

import './Footer.scss';

export default function Footer() {
  return (
    <footer className="app-footer">
      <section>
        <div className="main-layout footer-note">
          Made with <span role="img" aria-label="heart-emoji">❤️</span> by Rafal Szczepankiewicz
        </div>
      </section>
    </footer>
  );
}
