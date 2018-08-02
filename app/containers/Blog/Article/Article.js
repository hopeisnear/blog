import React, { PureComponent } from 'react';
import { func, string, shape } from 'prop-types';
import { Helmet } from 'react-helmet';
import ArticleContent from 'components/ArticleContent';

import './Article.scss';

export default class Article extends PureComponent {
  componentDidMount() {
    if (!this.props.article) {
      this.props.fetchArticle(this.props.articleName);
    }
  }

  render() {
    return (
      <div className="blog-article">
        <Helmet>
          <title>Article details</title>
          <meta
            name="description"
            content={`Article ${this.props.articleName} content`}
          />
        </Helmet>
        <div className="blog-article-content">
          {this.props.article && <ArticleContent article={this.props.article} />}
        </div>
      </div>
    );
  }
}

Article.propTypes = {
  article: shape({}),
  articleName: string.isRequired,
  fetchArticle: func.isRequired
};

Article.defaultProps = {
  article: undefined
};
