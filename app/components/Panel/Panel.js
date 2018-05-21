import React from 'react';
import PropTypes from 'prop-types';

const Panel = (props) => (
  <article
    className="post-555 post type-post status-publish format-standard hentry category-tools tag-debugging tag-java tag-jvm">
    <header>
      <div className="categories clearfix">
        <i className="fa fa-tag" aria-hidden="true"></i>
        <div className="list">
          <a href="http://performantcode.com/category/tools/" className="underline gray">tools</a></div>
      </div>
      <div className="article-author">
        <div className="meta">
          <div className="top">
            <a href="http://performantcode.com/author/admin/" rel="author" className="fn">Grzegorz Mirek</a></div>

          <div className="bottom">
            <time className="created" dateTime="2018-05-17T20:37:47+00:00">May 17, 2018</time>
            <span className="split"></span>

            5 min read
          </div>
        </div>
      </div>
    </header>

    <div className="inner-entry">
      <a href="http://performantcode.com/tools/debugging-in-production/" className="inner-wrap"></a>

      <h2 className="title">
        Debugging in Production </h2>


      <div className="summary">
        <p>Why debugging in production is so tempting? In one of my first jobs, one of the tasks I had was to fix a bug
          which used to occur from time to time in a very complex production system. That is easy! – I thought. I will
          reproduce the same situation in my development environment, find…</p>

      </div>
    </div>

    <a href="http://performantcode.com/tools/debugging-in-production/" className="read-more gray">
      Read more... </a>
  </article>
);

Panel.propTypes = {
  item: PropTypes.any
};

export default Panel;
