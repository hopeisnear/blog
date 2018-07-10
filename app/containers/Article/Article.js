import React from 'react';
import { Helmet } from 'react-helmet';
import ArticleDetails from 'components/ArticleDetails';

import './article-style.scss';

export default class Article extends React.Component {
  componentDidMount() {
    this.props.fetchArticle();
  }

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
          {this.props.article && <ArticleDetails article={this.props.article} />}
        </div>
      </div>
    );
  }
}
