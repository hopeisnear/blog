import React, { PureComponent } from 'react';
import { shape } from 'prop-types';
import AddComment from 'containers/Blog/AddComment';
import './Comment.scss';

export default class Comment extends PureComponent {
  state = {
    showReplyForm: false
  };

  showReplyForm = () => {
    this.setState({ showReplyForm: true });
  };

  render() {
    return (
      <article className="Comment">
        <footer className="comment__footer">
          <div className="comment__author">
            <img alt="avatar" src="https://0.gravatar.com/avatar/f734130d2be486763e433ed0bf4fb6ac?s=60&amp;d=https%3A%2F%2F0.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D96" className="author__avatar" />
            <b>{this.props.comment.name}</b>
          </div>
          <div className="comment__timestamp">
            <a href="http://TODO/#comment-43756">
              <time dateTime={this.props.comment.createdAt}>
                {this.props.comment.createdAt}
              </time>
            </a>
          </div>
        </footer>
        <div className="comment__body">
          <p className="comment__content">
            {this.props.comment.content}
          </p>
        </div>
        <div>
          <button className="comment__reply" onClick={this.showReplyForm}>reply</button>
          {this.state.showReplyForm && <AddComment comment={this.props.comment} />}
        </div>
      </article>
    );
  }
}

Comment.propTypes = {
  comment: shape({})
};
