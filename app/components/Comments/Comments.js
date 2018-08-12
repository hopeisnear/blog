/* eslint-disable no-underscore-dangle */
import React from 'react';
import { array } from 'prop-types';
import { isEmpty } from 'lodash';
import Comment from 'components/Comment/index';
import './Comments.scss';

const Comments = (props) => (
  <div className="comments">
    <h2>{props.comments.length} Comments</h2>
    <ol>
      {props.comments.map((comment, commentIndex) => (
        <li key={comment._key}>
          <Comment comment={comment} index={`${commentIndex}`} />
          {!isEmpty(comment.replies) && renderReplyComments(comment.replies, commentIndex)}
        </li>
      ))}
    </ol>
  </div>
);

function renderReplyComments(replies, commentIndex) {
  return (
    <ol className="replies">
      {replies.map((reply, replyIndex) => (
        <li key={reply._key}>
          <Comment comment={reply} index={`${commentIndex}-${replyIndex}`} />
          {!isEmpty(reply.replies) && renderReplyComments(reply.replies, `${commentIndex}-${replyIndex}`)}
        </li>
      ))}
    </ol>
  );
}

Comments.propTypes = {
  comments: array.isRequired
};

export default Comments;
