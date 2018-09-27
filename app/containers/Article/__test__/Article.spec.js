import React from 'react';
import { shallow } from 'enzyme';
import { spy, assert } from 'sinon';

import Article from '../Article';

describe('<Article />', () => {
  test('should render <Article />', () => {
    const articleComponent = shallow(<Article {...createProps()} />);

    expect(articleComponent).toMatchSnapshot();
  });

  test('should fetch new article on init', () => {
    const articleComponent = shallow(<Article {...createProps()} article={undefined} />);

    assert.calledOnce(articleComponent.instance().props.fetchArticle);
  });

  function createProps() {
    return {
      articleName: 'Test article',
      article: {
        comments: [],
        commentsCount: 2,
        title: 'article title',
        teaser: 'article teaser',
        image: ''
      },
      fetchArticle: spy()
    };
  }
});
