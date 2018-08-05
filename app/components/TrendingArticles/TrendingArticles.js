import React from 'react';
import './TrendingArticles.scss';

const TrendingArticles = () => (
  <div className="trending-articles">
    <div className="header">
      Trending articles
    </div>
    <div className="content">
      <nav className="blog-block">
        <ul className="blog_categories-list">
          <li className="blog_categories-list_item">
            <a href="https://www.toptal.com/developers/blog/back-end">
                Back-end
            </a>
          </li>
          <li className="blog_categories-list_item">
            <a href="https://www.toptal.com/developers/blog/web-front-end">
                Web front-end
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default TrendingArticles;
