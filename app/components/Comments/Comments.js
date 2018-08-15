/* eslint-disable no-underscore-dangle */
import React from 'react';
import { array } from 'prop-types';
import { isEmpty } from 'lodash';
import Comment from 'components/Comment';

import './Comments.scss';

const Comments = (props) => (
  <div className="Comments">
    <h2>{props.comments.length} Comments</h2>
    <ol className="comments__list">
      {props.comments.map((comment, commentIndex) => (
        <li className="list__item" key={comment._key}>
          <Comment comment={comment} index={`${commentIndex}`} />
          {!isEmpty(comment.replies) && renderReplyComments(comment.replies, commentIndex)}
        </li>
      ))}
    </ol>
  </div>
);

function renderReplyComments(replies, commentIndex) {
  return (
    <ol className="replies__list">
      {replies.map((reply, replyIndex) => (
        <li className="list__item" key={reply._key}>
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
