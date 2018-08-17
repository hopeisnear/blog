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

    const { addComment, comment, onAddComment } = this.props;
    const { content, name, email, website } = this.state;
    addComment(comment, { content, name, email, website });
    this.setState({ showCommentExpandableSection: false, content: undefined, email: undefined, name: undefined, website: undefined });
    onAddComment();
  };

  render() {
    const { content, showCommentExpandableSection, email, name, website } = this.state;

    return (
      <div className="AddComment">
        <form onSubmit={this.handleSubmit}>
          <textarea
            className="add-comment__input"
            name="content"
            maxLength="65525"
            required
            placeholder="Enter your comments here"
            value={content}
            onChange={this.handleInputChange}
            onFocus={this.expandCommentDetails}
          />
          {showCommentExpandableSection && (
            <div className="add-comment__expandable-section">
              <div>
                <label className="sticky">
                  <input name="email" type="email" size="30" required maxLength="100" value={email} onChange={this.handleInputChange} />
                  <label htmlFor="email">Email</label>
                </label>
              </div>
              <div>
                <label className="sticky">
                  <input name="name" type="text" size="30" required maxLength="100" value={name} onChange={this.handleInputChange} />
                  <label htmlFor="name">Name</label>
                </label>
              </div>
              <div>
                <label className="sticky">
                  <input name="website" type="url" size="30" maxLength="200" value={website} onChange={this.handleInputChange} />
                  <label htmlFor="website">Website (optional)</label>
                </label>
              </div>
            </div>
          )}
          {showCommentExpandableSection && (
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
  onAddComment: func,
  comment: shape({})
};

AddComment.defaultProps = {
  comment: undefined,
  onAddComment: () => {}
};
