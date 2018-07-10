import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';

import { fetchArticleAction } from './article-actions';
import { selectArticle } from './article-selector';
import articleReducer from './article-reducer';
import Article from './Article';

const mapDispatchToProps = (dispatch) => ({
  fetchArticle: () => dispatch(fetchArticleAction({ id: 'test' }))
});

const mapStateToProps = createStructuredSelector({
  article: selectArticle()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'article', reducer: articleReducer });

export default compose(withReducer, withConnect)(Article);
export { mapDispatchToProps };
