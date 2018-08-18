import React from 'react';
import { shallow } from 'enzyme';
import { spy, assert } from 'sinon';

import Articles from '../Articles';

describe('<Articles />', () => {
  test('should render <Articles />', () => {
    const articlesComponent = shallow(<Articles {...createProps()} />);

    expect(articlesComponent).toMatchSnapshot();
  });

  test('should fetch new article on init', () => {
    const articlesComponent = shallow(<Articles {...createProps()} articles={[]} />);

    assert.calledOnce(articlesComponent.instance().props.fetchArticles);
  });

  function createProps() {
    return {
      articleName: 'Test article',
      articles: [{
        slug: {
          current: 'test-article'
        }
      }],
      fetchArticles: spy()
    };
  }
});
