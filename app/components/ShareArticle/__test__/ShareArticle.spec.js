import React from 'react';
import { shallow } from 'enzyme';
import ShareArticle from '../ShareArticle';

describe('<ShareArticle />', () => {
  test('should render <ShareArticle />', () => {
    global.window = { location: { href: 'www.test.com' } };

    const ahareArticleComponent = shallow(<ShareArticle />);

    expect(ahareArticleComponent).toMatchSnapshot();
  });
});
