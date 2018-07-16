import React, { PureComponent } from 'react';
import { func, string } from 'prop-types';
import { Helmet } from 'react-helmet';
import ArticleContent from 'components/ArticleContent';

import './article-style.scss';

export default class Article extends PureComponent {
  componentDidMount() {
    if (!this.props.article) {
      this.props.fetchArticle(this.props.articleName);
    }
  }

  render() {
    return (
      <div className="article-details">
        <Helmet>
          <title>Article details</title>
          <meta
            name="description"
            content={`Article ${this.props.articleName} content`}
          />
        </Helmet>
        <div>
          {this.props.article && <ArticleContent article={this.props.article} />}
        </div>
      </div>
    );
  }
}

Article.propTypes = {
  article: string,
  articleName: string.isRequired,
  fetchArticle: func.isRequired
};

Article.defaultProps = {
  article: undefined
};
