import React from 'react';
import { shallow } from 'enzyme';
import { spy, stub, assert } from 'sinon';
import * as imageLoader from 'utils/imageLoader';
import TrendingArticles from '../TrendingArticles';

describe('<TrendingArticles />', () => {
  test('should render <TrendingArticles />', () => {
    stub(imageLoader, 'imageUrlFor').callsFake(image => ({ ignoreImageParams: () => ({ width: () => ({ height: () => image }) }) }));

    const trendingArticlesComponent = shallow(<TrendingArticles {...createProps()} />);

    expect(trendingArticlesComponent).toMatchSnapshot();
  });

  test('should load trending articles on component init', () => {
    stub(imageLoader, 'imageUrlFor').callsFake(image => ({ ignoreImageParams: () => ({ width: () => ({ height: () => image }) }) }));

    const trendingArticlesComponent = shallow(<TrendingArticles {...createProps()} />);

    assert.calledOnce(trendingArticlesComponent.instance().props.fetchTrendingArticles);
  });

  afterEach(() => {
    imageLoader.imageUrlFor.restore();
  });

  function createProps() {
    return {
      fetchTrendingArticles: spy(),
      trendingArticles: [
        {
          slug: { current: 'article-1' },
          title: 'article-1-title',
          image: 'image1'
        },
        {
          slug: { current: 'article-2' },
          title: 'article-2-title',
          image: 'image2'
        }
      ]
    };
  }
});
