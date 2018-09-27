import React, { PureComponent } from 'react';
import { func, shape } from 'prop-types';
import { Helmet } from 'react-helmet';
import { imageUrlFor } from 'utils/imageLoader';
import ArticleContent from 'components/ArticleContent';
import ShareArticle from 'components/ShareArticle';
import Comments from 'components/Comments/index';
import AddComment from 'containers/AddComment/Loadable';
import './Article.scss';

export default class Article extends PureComponent {
  componentDidMount() {
    !this.props.article && this.props.fetchArticle();
  }

  render() {
    const { article } = this.props;
    if (!article) {
      return null;
    }

    return (
      <div className="Article">
        <Helmet>
          <title>{article.title}</title>
          <meta name="description" content={article.teaser} />
          <meta property="og:site_name" content="GOOD dev" />
          <meta property="og:title" content={article.title} />
          <meta property="og:description" content={article.teaser} />
          <meta
            property="og:image"
            content={imageUrlFor(article.image)
              .ignoreImageParams()
              .width(360)
              .height(252)}
          />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="360" />
          <meta property="og:image:height" content="252" />
        </Helmet>
        <div className="article__content">{<ArticleContent article={article} />}</div>
        <ShareArticle />
        {article.comments && <Comments comments={article.comments} commentsCount={article.commentsCount} />}
        <h3 className="article__reply_header">Leave a Reply</h3>
        <AddComment />
      </div>
    );
  }
}

Article.propTypes = {
  article: shape({}),
  fetchArticle: func.isRequired
};

Article.defaultProps = {
  article: undefined
};
