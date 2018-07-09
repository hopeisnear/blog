import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';

import { fetchArticle } from './article-actions';
import { makeSelectUsername } from './article-selector';
import articleReducer from './article-reducer';
import Article from './Article';

const mapDispatchToProps = (dispatch) => ({
  fetchArticle: () => dispatch(fetchArticle({ id: 'test' }))
});

const mapStateToProps = createStructuredSelector({
  username: makeSelectUsername()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'article', reducer: articleReducer });

export default compose(withReducer, withConnect)(Article);
export { mapDispatchToProps };
