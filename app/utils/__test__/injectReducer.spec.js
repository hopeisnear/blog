import React from 'react';
import { browserHistory } from 'react-router-dom';
import { shallow } from 'enzyme';
import { identity } from 'lodash';
import { stub, assert } from 'sinon';

import configureStore from '../../configureStore';
import injectReducer from '../injectReducer';
import * as reducerInjectors from '../reducerInjectors';

const Component = () => null;

const reducer = identity;

describe('injectReducer decorator', () => {
  let store;
  let injectors;
  let ComponentWithReducer;

  beforeEach(() => {
    injectors = {
      injectReducer: stub()
    };
    store = configureStore({}, browserHistory);
    stub(reducerInjectors, 'default').returns(injectors);
    ComponentWithReducer = injectReducer({ key: 'test', reducer })(Component);
  });

  afterEach(() => {
    reducerInjectors.default.restore();
  });

  it('should inject a given reducer', () => {
    shallow(<ComponentWithReducer />, { context: { store } });

    assert.calledOnce(injectors.injectReducer);
    assert.calledWithExactly(injectors.injectReducer, 'test', reducer);
  });

  it('should set a correct display name', () => {
    expect(ComponentWithReducer.displayName).toBe('withReducer(Component)');
    expect(injectReducer({ key: 'test', reducer })(() => null).displayName).toBe('withReducer(Component)');
  });

  it('should propagate props', () => {
    const props = { testProp: 'test' };
    const renderedComponent = shallow(<ComponentWithReducer {...props} />, { context: { store } });

    expect(renderedComponent.prop('testProp')).toBe('test');
  });
});
