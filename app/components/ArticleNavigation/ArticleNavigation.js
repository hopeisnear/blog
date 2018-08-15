import React from 'react';
import { Link } from 'react-router-dom';

import './ArticleNavigation.scss';

export default function ArticleNavigation(props) {
  return (
    <nav className="ArticleNavigation">
      <div className="nav__links">
        <div className="nav__next">
          <Link to={`/blog/${props.article.slug.current}`}>

          </Link>
        </div>
        <div className="nav__next">

        </div>
      </div>
    </nav>
  );
}
