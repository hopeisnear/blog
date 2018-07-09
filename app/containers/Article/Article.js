import React from 'react';
import { Helmet } from 'react-helmet';
import ArticleContent from 'components/ArticleContent';

import './article-style.scss';

export default class Article extends React.Component {

  render() {
    return (
      <div className="article-details">
        <Helmet>
          <title>Feature Page</title>
          <meta
            name="description"
            content="Feature page of React.js Boilerplate application"
          />
        </Helmet>

        <div>
          <ArticleContent />
        </div>


      </div>
    );
  }
}
