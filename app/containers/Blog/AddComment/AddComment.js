/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { PureComponent } from 'react';
import { func, shape } from 'prop-types';

import './AddComment.scss';

export default class AddComment extends PureComponent {
  state = {
    showCommentExpandableSection: false,
    content: undefined,
    email: undefined,
    name: undefined,
    website: undefined
  };

  expandCommentDetails = () => {
    this.setState({ showCommentExpandableSection: true });
  };

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ showCommentExpandableSection: false });
    this.props.addComment(this.props.comment, {
      content: this.state.content, name: this.state.name, email: this.state.email, website: this.state.website
    });
  };

  render() {
    return (
      <div className="AddComment">
        <form onSubmit={this.handleSubmit}>
          <textarea className="add-comment__input" name="content" maxLength="65525" required placeholder="Enter your comments here" value={this.state.content} onChange={this.handleInputChange} onFocus={this.expandCommentDetails} />
          {this.state.showCommentExpandableSection && (
            <div className="add-comment__expandable-section">
              <div>
                <label className="sticky">
                  <input name="email" type="email" size="30" required maxLength="100" value={this.state.email} onChange={this.handleInputChange} />
                  <label htmlFor="email">Email</label>
                </label>
              </div>
              <div>
                <label className="sticky">
                  <input name="name" type="text" size="30" required maxLength="100" value={this.state.name} onChange={this.handleInputChange} />
                  <label htmlFor="name">Name</label>
                </label>
              </div>
              <div>
                <label className="sticky">
                  <input name="website" type="url" size="30" maxLength="200" value={this.state.website} onChange={this.handleInputChange} />
                  <label htmlFor="website">Website (optional)</label>
                </label>
              </div>
            </div>
          )}
          {this.state.showCommentExpandableSection && (
            <div className="add-comment__form-submit">
              <input name="submit" type="submit" className="form-submit__input" value="Post Comment" />
            </div>
          )}
        </form>
      </div>
    );
  }
}

AddComment.propTypes = {
  addComment: func.isRequired,
  comment: shape({})
};

AddComment.defaultProps = {
  comment: undefined
};
