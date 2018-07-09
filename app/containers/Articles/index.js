import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';

import { fetchArticlesAction } from './articles-actions';
import { selectArticles } from './articles-selector';
import articlesReducer from './articles-reducer';
import Articles from './Articles';

const mapDispatchToProps = (dispatch) => ({
  fetchArticles: () => dispatch(fetchArticlesAction())
});

const mapStateToProps = createStructuredSelector({
  articles: selectArticles()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'articles', reducer: articlesReducer });

export default compose(withReducer, withConnect)(Articles);
export { mapDispatchToProps };
