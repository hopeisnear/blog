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

    assert.calledWithExactly(articleComponent.instance().props.fetchArticle, 'Test article');
  });

  function createProps() {
    return {
      articleName: 'Test article',
      article: {
        comments: []
      },
      fetchArticle: spy()
    };
  }
});
