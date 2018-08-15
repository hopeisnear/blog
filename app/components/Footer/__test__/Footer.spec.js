import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../Footer';

describe('<Footer />', () => {
  test('should render <Footer />', () => {
    const footerComponent = shallow(<Footer />);

    expect(footerComponent).toMatchSnapshot();
  });
});
