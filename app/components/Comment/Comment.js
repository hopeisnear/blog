import React, { PureComponent } from 'react';
import AddComment from 'containers/Blog/AddComment';
import './Comment.scss';

export default class Comment extends PureComponent {
  state = {
    showReplyForm: false
  };

  render() {
    return (
      <article className="comment">
        <footer>
          <div className="author">
            <img alt="" src="https://0.gravatar.com/avatar/f734130d2be486763e433ed0bf4fb6ac?s=60&amp;d=https%3A%2F%2F0.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D96" className="avatar" />
            <b className="fn">{this.props.comment.name}</b>
          </div>
          <div className="timestamp">
            <a href="https://blog.fedecarg.com/2017/08/01/website-performance-monitoring-open-source-tool/#comment-43756">
              <time dateTime="2017-08-15T20:55:36+00:00">
                {this.props.comment.createdAt}
              </time>
            </a>
          </div>
        </footer>
        <div className="comment-details">
          <p>
            {this.props.comment.content}
          </p>
        </div>
        <div>
          <button onClick={() => this.setState({ showReplyForm: true })}>reply</button>
          {this.state.showReplyForm && <AddComment comment={this.props.comment} />}
        </div>
      </article>
    );
  }
}
