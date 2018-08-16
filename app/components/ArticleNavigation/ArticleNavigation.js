import React from 'react';
import { shape } from 'prop-types';
import { Link } from 'react-router-dom';

import './ArticleNavigation.scss';

export default function ArticleNavigation({ article }) {
  return (
    <nav className="ArticleNavigation">
      <div className="nav__links">
        <div className="nav__next">
          <Link to={`/blog/${article.slug.current}`} />
        </div>
        <div className="nav__next" />
      </div>
    </nav>
  );
}

ArticleNavigation.propTypes = {
  article: shape({}).isRequired
};
