import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import blogReducer from './blog-reducer';
import Blog from './Blog';

const mapDispatchToProps = () => ({});

const mapStateToProps = createStructuredSelector({});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'blog', reducer: blogReducer });

export default compose(withReducer, withConnect)(Blog);
export { mapDispatchToProps };
