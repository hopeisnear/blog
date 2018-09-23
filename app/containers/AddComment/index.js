import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { addCommentAction, login, logout } from './add-comment-actions';
import AddComment from './AddComment';

const mapDispatchToProps = dispatch => ({
  addComment: (comment, commentForm) => dispatch(addCommentAction(comment, commentForm)),
  login: loginProvider => dispatch(login(loginProvider)),
  logout: () => dispatch(logout())
});

const mapStateToProps = createStructuredSelector({
  loggedIn: state => state.getIn(['login', 'user']) !== undefined,
  user: state => state.getIn(['login', 'user']),
  loginProvider: state => state.getIn(['login', 'loginProvider'])
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(AddComment);
export { mapDispatchToProps };
