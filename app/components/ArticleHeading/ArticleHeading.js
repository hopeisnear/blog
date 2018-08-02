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
        <a className="article-image-link" href="">
          <img
            src={imageUrlFor(article.image).ignoreImageParams().width(360).height(252)}
            alt={'article heading'}
          />
        </a>
      </div>
      <div className="article-title-wrapper">
        <div className="article-title">
          <Link className="article-title-link" to={`/blog/${article.slug.current}`}>
            {article.title}
          </Link>
        </div>
        <div className="article-timestamp">
          <time className="updated" dateTime={article.publishedAt}>{moment(article.publishedAt).format('ll')}</time>
        </div>
      </div>
      <article className="article-teaser">
        <div>
          <p className="article-short-description">
            {article.body}
          </p>
          <Link className="article-title" to={`/blog/${article.slug.current}`}>
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

