import React, { PureComponent } from 'react';
import { func, string, shape } from 'prop-types';
import { Helmet } from 'react-helmet';
import ArticleContent from 'components/ArticleContent';
import Comments from 'components/Comments';
import AddComment from 'containers/Blog/AddComment';

import './Article.scss';

export default class Article extends PureComponent {
  componentDidMount() {
    if (!this.props.article) {
      this.props.fetchArticle(this.props.articleName);
    }
  }

  render() {
    return (
      <div className="Article">
        <Helmet>
          <title>Article details</title>
          <meta
            name="description"
            content={`Article ${this.props.articleName} content`}
          />
        </Helmet>
        <div className="article__content">
          {this.props.article && <ArticleContent article={this.props.article} />}
        </div>
        {this.props.article && this.props.article.comments && <Comments comments={this.props.article.comments} />}
        <h3 className="article__reply_header">Leave a Reply</h3>
        <AddComment />
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
