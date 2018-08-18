import React from 'react';
import { shallow } from 'enzyme';
import AddComment from 'containers/AddComment/Loadable';

import Comment from '../Comment';

describe('<Comment />', () => {
  test('should render <Comment />', () => {
    const commentComponent = shallow(<Comment comment={createComment()} />);

    expect(commentComponent).toMatchSnapshot();
  });

  test('should expand add comment form when reply button is clicked', () => {
    const commentComponent = shallow(<Comment comment={createComment()} />);

    commentComponent.find('button.comment__reply').simulate('click');

    expect(commentComponent.find(AddComment).exists()).toBe(true);
  });

  function createComment() {
    return { name: 'John Smith', createdAt: '2018-08-15T18:12:36+02:00', content: 'this is some test comment' };
  }
});
