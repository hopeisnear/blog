import React from 'react';
import { shallow } from 'enzyme';
import { stub } from 'sinon';
import * as imageLoader from 'utils/imageLoader';
import ArticleHeading from '../ArticleHeading';

describe('<ArticleHeading />', () => {
  test('should render <ArticleHeading />', () => {
    stub(imageLoader, 'imageUrlFor').callsFake(image => ({ ignoreImageParams: () => ({ width: () => ({ height: () => image }) }) }));
    const article = { slug: { current: 'article-1' }, title: 'article-1-title', image: 'image1', publishedAt: '2018-08-18T15:01:53Z' };

    const articleHeadingComponent = shallow(<ArticleHeading article={article} />);

    expect(articleHeadingComponent).toMatchSnapshot();
  });

  afterEach(() => {
    imageLoader.imageUrlFor.restore();
  });
});
