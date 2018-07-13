import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import { selectArticleName } from './blog-selector';
import reducer from './blog-reducer';
import Blog from './Blog';

const mapDispatchToProps = (dispatch) => ({
});

const mapStateToProps = createStructuredSelector({
  articleName: selectArticleName()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'blog', reducer });

export default compose(withReducer, withConnect)(Blog);
export { mapDispatchToProps };
