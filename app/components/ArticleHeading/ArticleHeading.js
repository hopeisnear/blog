import React from 'react';
import { map } from 'react-immutable-proptypes';
import moment from 'moment';
import { loadImage } from 'utils/imageLoader';
import { Link } from 'react-router-dom';

const ArticleHeading = ({ article }) => (
  <article className="article">
    <div className="article-image">
      <a href="">
        <div>
          <img
            width="360"
            height="252"
            src={loadImage(`${article.get('name')}.jpg`)}
            className="attachment-news-thumb size-news-thumb wp-post-image"
            alt=""
            sizes="(max-width: 360px) 100vw, 360px"
          />
        </div>
      </a>
    </div>
    <div className="article-teaser">
      <header>
        <h2 className="article-title">
          <Link to={`/blog/${article.get('name')}`}>
            {article.get('title')}
          </Link>
        </h2>
        <time className="updated" dateTime={article.get('created')}>{moment(article.get('created')).format('ll')}</time>
      </header>
      <div>
        <p className="article-short-description">
          {article.get('preview')} …
        </p>
      </div>
    </div>
  </article>
);

ArticleHeading.propTypes = {
  article: map.isRequired
};

export default ArticleHeading;

