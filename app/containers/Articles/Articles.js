import React, { PureComponent } from 'react';
import { func } from 'prop-types';
import { list } from 'react-immutable-proptypes';
import ArticleContent from 'components/ArticleContent';

import './articles-style.scss';

export default class Articles extends PureComponent {
  componentDidMount() {
    this.props.fetchArticles();
  }

  render() {
    return (
      <div className="article-details">
        <div>
          {this.props.articles.map((article) => (<div key={article.get('name')}><ArticleContent article={article} /></div>)).toArray()}
        </div>
      </div>
    );
  }
}

Articles.propTypes = {
  articles: list.isRequired,
  fetchArticles: func.isRequired
};
