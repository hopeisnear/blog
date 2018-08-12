import React from 'react';
import { shape } from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';

import imageUrlBuilder from '@sanity/image-url';
import sanity from 'utils/sanityProvider';

import './ArticleHeading.scss';

const imageBuilder = imageUrlBuilder(sanity);

function imageUrlFor(source) {
  return imageBuilder.image(source);
}

const ArticleHeading = ({ article }) => (
  <div className="article-wrapper">
    <article className="article">
      <div className="article-image">
        <Link className="article-image-link" to={`/blog/${article.slug.current}`}>
          <img
            className="content-image"
            src={imageUrlFor(article.image).ignoreImageParams().width(360).height(252)}
            alt={'article heading'}
          />
        </Link>
      </div>
      <div className="article-title-wrapper">
        <h2 className="article-title">
          <Link className="article-title-link" to={`/blog/${article.slug.current}`}>
            {article.title}
          </Link>
        </h2>
        <div className="article-timestamp">
          <time className="updated" dateTime={article.publishedAt}>{moment(article.publishedAt).format('ll')}</time> by Rafal Szczepankiewicz
        </div>
      </div>
      <article className="article-teaser">
        <div>
          <p className="article-short-description">
            {article.teaser}
          </p>
          <Link className="article-title active" to={`/blog/${article.slug.current}`}>
            Read more
          </Link>
        </div>
      </article>
    </article>
  </div>
);

ArticleHeading.propTypes = {
  article: shape({}).isRequired
};

export default ArticleHeading;

