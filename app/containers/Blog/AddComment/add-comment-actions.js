/* eslint-disable no-underscore-dangle */
import { appendComment, addNewComment, addNewReply, appendReply } from 'services/comments-service';
import moment from 'moment';

export const ADD_COMMENT_RESPONDED = 'ADD_COMMENT_RESPONDED';

export function addCommentAction(comment, commentForm) {
  return (dispatch, getState) => {
    const pathname = getState().getIn(['route', 'location', 'pathname'], '/blog/');
    const articleName = pathname.split('/')[2] || '';
    const selectedArticleName = articleName.includes('?') ? articleName.split('?')[0] : articleName;

    const articles = getState().getIn(['blog', 'articles']);
    const selectedArticle = articles.find((article) => article.id === selectedArticleName && article.content !== undefined);

    if (!comment) {
      if (!selectedArticle.comments) {
        return addNewComment(selectedArticle._id, {
          name: commentForm.name,
          content: commentForm.content,
          email: commentForm.email,
          website: commentForm.website,
          createdAt: moment().format()
        }).then((response) => {
          dispatch({ type: ADD_COMMENT_RESPONDED, updatedArticle: response });
        });
      } else {
        return appendComment(selectedArticle._id, {
          name: commentForm.name,
          content: commentForm.content,
          email: commentForm.email,
          website: commentForm.website,
          createdAt: moment().format()
        }).then((response) => {
          dispatch({ type: ADD_COMMENT_RESPONDED, updatedArticle: response });
        });
      }
    } else {
      const commentHaveReply = selectedArticle.comments.some((com) => com._key === comment._key ? com.replies !== undefined : commentHaveReplies(comment._key, com));
      if (!commentHaveReply) {
        return addNewReply(selectedArticle._id, comment._key, {
          name: commentForm.name,
          content: commentForm.content,
          email: commentForm.email,
          website: commentForm.website,
          createdAt: moment().format()
        }).then((response) => {
          dispatch({ type: ADD_COMMENT_RESPONDED, updatedArticle: response });
        });
      } else {
        return appendReply(selectedArticle._id, comment._key, {
          name: commentForm.name,
          content: commentForm.content,
          email: commentForm.email,
          website: commentForm.website,
          createdAt: moment().format()
        }).then((response) => {
          dispatch({ type: ADD_COMMENT_RESPONDED, updatedArticle: response });
        });
      }
    }
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
