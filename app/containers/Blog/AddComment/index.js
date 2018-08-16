import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { addCommentAction } from './add-comment-actions';
import AddComment from './AddComment';

const mapDispatchToProps = dispatch => ({
  addComment: (comment, commentForm) => dispatch(addCommentAction(comment, commentForm))
});

const mapStateToProps = createStructuredSelector({
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(AddComment);
export { mapDispatchToProps };
