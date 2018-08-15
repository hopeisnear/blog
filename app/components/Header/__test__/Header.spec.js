import React from 'react';
import { shallow } from 'enzyme';

import Header from '../Header';

describe('<Header />', () => {
  test('should render <Header />', () => {
    const headerComponent = shallow(<Header />);

    expect(headerComponent).toMatchSnapshot();
  });
});
