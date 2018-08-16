/* eslint-disable no-underscore-dangle */
import {
  appendComment, addNewComment, addNewReply, appendReply
} from 'services/comments-service';
import moment from 'moment';
import { selectArticle } from 'containers/Blog/Article/article-selector';

export const ADD_COMMENT_RESPONDED = 'ADD_COMMENT_RESPONDED';

export function addCommentAction(comment, commentForm) {
  return (dispatch, getState) => {
    const selectedArticle = selectArticle()(getState());

    if (!comment) {
      if (!selectedArticle.comments) {
        return addNewComment(selectedArticle._id, { ...commentForm, createdAt: moment.utc().format() })
          .then((response) => {
            dispatch({ type: ADD_COMMENT_RESPONDED, updatedArticle: response });
          });
      }
      return appendComment(selectedArticle._id, { ...commentForm, createdAt: moment.utc().format() })
        .then((response) => {
          dispatch({ type: ADD_COMMENT_RESPONDED, updatedArticle: response });
        });
    }

    const commentHaveReply = selectedArticle.comments
      .some(selectedArticleComment => (selectedArticleComment._key === comment._key ? selectedArticleComment.replies !== undefined : commentHaveReplies(comment._key, selectedArticleComment)));
    if (!commentHaveReply) {
      return addNewReply(selectedArticle._id, comment._key, { ...commentForm, createdAt: moment.utc().format() })
        .then((response) => {
          dispatch({ type: ADD_COMMENT_RESPONDED, updatedArticle: response });
        });
    }
    return appendReply(selectedArticle._id, comment._key, { ...commentForm, createdAt: moment.utc().format() })
      .then((response) => {
        dispatch({ type: ADD_COMMENT_RESPONDED, updatedArticle: response });
      });
  };
}

function commentHaveReplies(searchKey, comment) {
  return comment.replies && comment.replies.some((reply) => {
    if (reply._key === searchKey) {
      return reply.replies !== undefined;
    }
    return commentHaveReplies(searchKey, reply);
  });
}
