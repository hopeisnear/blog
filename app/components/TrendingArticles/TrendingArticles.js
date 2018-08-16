import React from 'react';
import { arrayOf, shape } from 'prop-types';
import { Link } from 'react-router-dom';
import { imageUrlFor } from 'utils/imageLoader';
import './TrendingArticles.scss';

const TrendingArticles = ({ articles }) => (
  <div className="TrendingArticles">
    <div className="trending-articles__header">
      Trending articles
    </div>
    <div className="trending-articles__body">
      <nav>
        {articles.map(article => (
          <Link key={article.slug.current} className="trending-articles__link" to={`/blog/${article.slug.current}`}>
            <span className="trending-articles__image">
              <img
                src={imageUrlFor(article.image).ignoreImageParams().width(360).height(252)}
                alt="article heading"
              />
            </span>
            <span className="trending-articles__title">
              {article.title}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  </div>
);

TrendingArticles.propTypes = {
  articles: arrayOf(shape({})).isRequired
};

export default TrendingArticles;
