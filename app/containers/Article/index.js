import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectArticleName } from 'common/article-name-selector';
import { selectArticle } from 'common/article-selector';
import { fetchArticleAction } from './article-actions';
import Article from './Article';

const mapDispatchToProps = dispatch => ({
  fetchArticle: articleName => dispatch(fetchArticleAction(articleName))
});

const mapStateToProps = createStructuredSelector({
  article: selectArticle(),
  articleName: selectArticleName()
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(Article);
export { mapDispatchToProps };
