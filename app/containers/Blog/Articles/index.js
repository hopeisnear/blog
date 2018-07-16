import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { fetchArticlesAction } from './articles-actions';
import { selectArticles } from './articles-selector';
import Articles from './Articles';

const mapDispatchToProps = (dispatch) => ({
  fetchArticles: () => dispatch(fetchArticlesAction())
});

const mapStateToProps = createStructuredSelector({
  articles: selectArticles()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Articles);
export { mapDispatchToProps };
