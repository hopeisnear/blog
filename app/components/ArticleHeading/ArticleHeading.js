import React from 'react';
import { shape } from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { imageUrlFor } from 'utils/imageLoader';

import './ArticleHeading.scss';

const ArticleHeading = ({ article }) => (
  <article className="ArticleHeading">
    <div className="article__header">
      <Link className="header-image__link" to={`/blog/${article.slug.current}`}>
        <img
          className="header-image"
          src={imageUrlFor(article.image).ignoreImageParams().width(360).height(252)}
          alt="article"
        />
      </Link>
    </div>
    <div className="article__title">
      <h2 className="title__heading">
        <Link className="title__link" to={`/blog/${article.slug.current}`}>
          {article.title}
        </Link>
      </h2>
      <div className="title__timestamp">
        <time dateTime={article.publishedAt}>{moment(article.publishedAt).format('ll')}</time>
        <span> by Rafal Szczepankiewicz</span>
      </div>
    </div>
    <article className="article__body">
      <div>
        <p>
          {article.teaser}
        </p>
        <Link className="active" to={`/blog/${article.slug.current}`}>
          <span>Read more &#xbb;</span>
        </Link>
      </div>
    </article>
  </article>
);

ArticleHeading.propTypes = {
  article: shape({}).isRequired
};

export default ArticleHeading;
