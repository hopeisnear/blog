import React from 'react';
import { shallow } from 'enzyme';
import { spy, assert } from 'sinon';

import AddComment from '../AddComment';

describe('<AddComment />', () => {
  test('should render <AddComment />', () => {
    const addCommentComponent = shallow(<AddComment {...createProps()} />);

    expect(addCommentComponent).toMatchSnapshot();
  });

  test('should expand comment form on focus', () => {
    const addCommentComponent = shallow(<AddComment {...createProps()} />);

    addCommentComponent.find('.add-comment__input').simulate('focus');

    expect(addCommentComponent.find('.add-comment__expandable-section').exists()).toBe(true);
    expect(addCommentComponent.find('.add-comment__form-submit').exists()).toBe(true);
  });

  test('should fill in and submit the form', () => {
    const addCommentComponent = shallow(<AddComment {...createProps()} />);
    addCommentComponent.find('.add-comment__input').simulate('focus');

    addCommentComponent.find('.add-comment__input').simulate('change', { target: { name: 'content', value: 'test comment' } });
    addCommentComponent.find('input[name="email"]').simulate('change', { target: { name: 'email', value: 'aaa@aa.com' } });
    addCommentComponent.find('input[name="name"]').simulate('change', { target: { name: 'name', value: 'John Smith' } });
    addCommentComponent.find('input[name="website"]').simulate('change', { target: { name: 'website', value: 'http://website.com' } });
    addCommentComponent.find('form').simulate('submit', { preventDefault: () => {} });

    expect(addCommentComponent.instance().state.showCommentExpandableSection).toBe(false);
    assert.calledWithExactly(
      addCommentComponent.instance().props.addComment,
      { comment: '' },
      {
        content: 'test comment',
        name: 'John Smith',
        email: 'aaa@aa.com',
        website: 'http://website.com'
      }
    );
  });

  function createProps() {
    return {
      addComment: spy(),
      comment: { comment: '' },
      logout: () => {}
    };
  }
});
