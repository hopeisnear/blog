import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const ArticleContent = (props) => (
  <article className="article">
    <div className="article-image">
      <a href="">
        <div>
          <img
            width="360"
            height="252"
            src="https://www.w3schools.com/w3css/img_lights.jpg"
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
          <Link to="/article">
            <a href="">
               INFINITE STYLING – CHRISTMAS WINDOWS FOR GHD
            </a>
          </Link>
        </h2>
        <time className="updated" dateTime="2017-11-10T16:52:30+00:00">10th November 2017</time>
      </header>
      <div>
        <p className="article-short-description">
           Millington Associates Produce – Infinite Styling Christmas windows for GHD A contrast between light and dark, visualising infinite possibilities and blurred …
        </p>
      </div>
    </div>
  </article>
);

ArticleContent.propTypes = {

};

export default ArticleContent;

