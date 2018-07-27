import React from 'react';
import { shape } from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';

import imageUrlBuilder from '@sanity/image-url';
import sanity from 'utils/sanityProvider';

const imageBuilder = imageUrlBuilder(sanity);

function imageUrlFor(source) {
  return imageBuilder.image(source);
}

const ArticleHeading = ({ article }) => (
  <article className="article">
    <div className="article-image">
      <a href="">
        <div>
          <img
            src={imageUrlFor(article.image).ignoreImageParams().width(360).height(252)}
            alt={'article heading'}
          />
        </div>
      </a>
    </div>
    <div className="article-teaser">
      <header>
        <h2 className="article-title">
          <Link to={`/blog/${article.slug.current}`}>
            {article.title}
          </Link>
        </h2>
        <time className="updated" dateTime={article.publishedAt}>{moment(article.publishedAt).format('ll')}</time>
      </header>
      <div>
        <p className="article-short-description">
          {article.body}
        </p>
      </div>
    </div>
  </article>
);

ArticleHeading.propTypes = {
  article: shape({}).isRequired
};

export default ArticleHeading;

