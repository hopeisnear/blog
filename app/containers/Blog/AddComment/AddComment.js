/* eslint-disable jsx-a11y/label-has-for */
import React, { PureComponent } from 'react';

import './AddComment.scss';

export default class AddComment extends PureComponent {
  state = {
    showCommentDetails: false,
    content: undefined,
    email: undefined,
    name: undefined,
    website: undefined
  };

  expandCommentDetails() {
    this.setState({ showCommentDetails: true });
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ showCommentDetails: false });
    const {
      content, name, email, website
    } = this.state;
    this.props.addComment(this.props.comment, {
      content, name, email, website
    });
  };

  render() {
    return (
      <div className="comment-form-panel">
        <form method="post" noValidate="" onSubmit={this.handleSubmit}>
          <div className="comment-wrapper" onFocus={() => this.expandCommentDetails()}>
            <textarea name="content" maxLength="65525" required="required" placeholder="Enter your comments here" value={this.state.content} onChange={this.handleInputChange} />
          </div>
          <div className={`comment-hidden-fields ${!this.state.showCommentDetails ? 'hidden' : ''}`}>
            <div className="input-wrapper">
              <label className="sticky">
                <input name="email" type="email" size="30" required maxLength="100" value={this.state.email} onChange={this.handleInputChange} />
                <label htmlFor="email">Email</label>
              </label>
            </div>
            <div className="input-wrapper">
              <label className="sticky">
                <input name="name" type="text" size="30" required maxLength="100" value={this.state.name} onChange={this.handleInputChange} />
                <label htmlFor="name">Name</label>
              </label>
            </div>
            <div className="input-wrapper">
              <label className="sticky">
                <input name="website" type="url" size="30" maxLength="200" value={this.state.website} onChange={this.handleInputChange} />
                <label htmlFor="website">Website (optional)</label>
              </label>
            </div>
          </div>
          <div className={`form-submit ${!this.state.showCommentDetails ? 'hidden' : ''}`}>
            <input name="submit" type="submit" className="submit" value="Post Comment" />
          </div>
        </form>
      </div>
    );
  }
}
