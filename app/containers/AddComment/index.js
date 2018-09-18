import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { addCommentAction, logout } from './add-comment-actions';
import AddComment from './AddComment';

const mapDispatchToProps = dispatch => ({
  addComment: (comment, commentForm) => dispatch(addCommentAction(comment, commentForm)),
  logout: () => dispatch(logout())
});

const mapStateToProps = createStructuredSelector({
  loggedIn: state => state.getIn(['login', 'user']) !== undefined,
  user: state => state.getIn(['login', 'user'])
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(AddComment);
export { mapDispatchToProps };
