import React, { PureComponent } from 'react';
import { func, array } from 'prop-types';
import { isEmpty } from 'lodash';
import ArticleHeading from 'components/ArticleHeading';
import './articles-style.scss';

export default class Articles extends PureComponent {
  componentDidMount() {
    if (isEmpty(this.props.articles)) {
      this.props.fetchArticles();
    }
  }

  render() {
    return (
      <div className="article-details">
        {this.props.articles.map((article) => (<div key={article.slug.current}><ArticleHeading article={article} /></div>))}
      </div>
    );
  }
}

Articles.propTypes = {
  articles: array.isRequired,
  fetchArticles: func.isRequired
};
