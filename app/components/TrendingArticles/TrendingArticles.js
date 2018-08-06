import React from 'react';
import { array } from 'prop-types';
import { Link } from 'react-router-dom';
import imageUrlBuilder from '@sanity/image-url';
import sanity from 'utils/sanityProvider';
import './TrendingArticles.scss';

const imageBuilder = imageUrlBuilder(sanity);


function imageUrlFor(source) {
  return imageBuilder.image(source);
}

const TrendingArticles = (props) => (
  <div className="trending-articles">
    <div className="header">
      Trending articles
    </div>
    <div className="content">
      <nav className="trending-articles-nav">
        {props.articles.map((article) => (
          <Link key={article.slug.current} className="trending-articles-link" to={`/blog/${article.slug.current}`}>
            <span className="image">
              <img
                className="content-image"
                src={imageUrlFor(article.image).ignoreImageParams().width(360).height(252)}
                alt={'article heading'}
              />
            </span>
            <span className="trending-articles-desciption">
              {article.title}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  </div>
);

TrendingArticles.props = {
  articles: array.isRequired
};

export default TrendingArticles;
