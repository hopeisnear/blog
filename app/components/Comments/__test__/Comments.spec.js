import React from 'react';
import { shallow } from 'enzyme';

import Comments from '../Comments';

describe('<Comments />', () => {
  test('should render <Comments />', () => {

    const commentsComponent = shallow(<Comments comments={createComments()} />);

    expect(commentsComponent).toMatchSnapshot();
  });

  // test('should expand add comment form when reply button is clicked', () => {
  //   const commentComponent = shallow(<Comment comment={createComment()} />);
  //
  //   commentComponent.find('button.comment__reply').simulate('click');
  //
  //   expect(commentComponent.find(AddComment).exists()).toBe(true);
  // });

  function createComments() {
    return [{ _key: '1', replies: [{ _key: '2' }, { _key: '3', replies: [{ _key: '4' }] }] }];
  }
});
