/* eslint-disable jsx-a11y/label-has-for */
import React, { PureComponent } from 'react';
import { func, shape } from 'prop-types';
import classnames from 'classnames';

import './AddComment.scss';

export default class AddComment extends PureComponent {
  state = {
    showCommentExpandableSection: false,
    content: undefined,
    email: undefined,
    name: undefined,
    website: undefined
  };

  expandCommentDetail= () => {
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
    const {
      content, name, email, website
    } = this.state;
    this.props.addComment(this.props.comment, {
      content, name, email, website
    });
  };

  render() {
    return (
      <div className="AddComment">
        <form onSubmit={this.handleSubmit}>
          <textarea className="add-comment__input" name="content" maxLength="65525" required placeholder="Enter your comments here" value={this.state.content} onChange={this.handleInputChange} onFocus={this.expandCommentDetails} />
          <div className={classnames('add-comment__expandable-section', { 'expandable-section--collapsed': !this.state.showCommentExpandableSection })}>
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
          <div className={classnames('add-comment__form-submit', { 'expandable-section--collapsed': !this.state.showCommentExpandableSection })}>
            <input name="submit" type="submit" className="form-submit__input" value="Post Comment" />
          </div>
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
