import React, { PureComponent } from 'react';
import { func } from 'prop-types';
import { list } from 'react-immutable-proptypes';
import { Helmet } from 'react-helmet';
import ArticleContent from 'components/ArticleContent';

import './articles-style.scss';

export default class Articles extends PureComponent {
  componentDidMount() {
    this.props.fetchArticles();
  }

  render() {
    return (
      <div className="article-details">
        <Helmet>
          <title>Feature Page</title>
          <meta name="description" content="Feature page of React.js Boilerplate application" />
        </Helmet>
        <div>
          {this.props.articles.map((article) => (<div key={article.get('id')}><ArticleContent /></div>)).toArray()}
        </div>
      </div>
    );
  }
}

Articles.propTypes = {
  articles: list.isRequired,
  fetchArticles: func.isRequired
};
