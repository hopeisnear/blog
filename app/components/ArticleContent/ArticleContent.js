import React from 'react';
import { Link } from 'react-router-dom';

import '../../images/first_article.jpg';

const ArticleContent = ({ article }) => (
  <article className="article">
    <div className="article-image">
      <a href="">
        <div>
          <img
            width="360"
            height="252"
            src={`../../images/${article.get('name')}.jpg`}
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
          <Link to={`/articles/${article.get('name')}`}>
            <a href="">
              {article.get('title')}
            </a>
          </Link>
        </h2>
        <time className="updated" dateTime="2017-11-10T16:52:30+00:00">{article.get('created')}</time>
      </header>
      <div>
        <p className="article-short-description">
          {article.get('preview')} …
        </p>
      </div>
    </div>
  </article>
);

ArticleContent.propTypes = {

};

export default ArticleContent;

