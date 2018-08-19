import React, { PureComponent } from 'react';
import { func, string, shape } from 'prop-types';
import { Helmet } from 'react-helmet';
import ArticleContent from 'components/ArticleContent';
import ShareArticle from 'components/ShareArticle';
import Comments from 'components/Comments/index';
import AddComment from 'containers/AddComment/Loadable';

import './Article.scss';

export default class Article extends PureComponent {
  componentDidMount() {
    const { article, fetchArticle } = this.props;
    !article && fetchArticle();
  }

  render() {
    const { articleName, article } = this.props;

    return (
      <div className="Article">
        <Helmet>
          <title>Article details</title>
          <meta
            name="description"
            content={`Article ${articleName} content`}
          />
        </Helmet>
        <div className="article__content">
          {article && <ArticleContent article={article} />}
        </div>
        <ShareArticle />
        {article && article.comments && <Comments comments={article.comments} commentsCount={article.commentsCount} />}
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
