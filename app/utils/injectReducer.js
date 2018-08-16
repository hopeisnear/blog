import React from 'react';
import { shape } from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';

import getInjectors from './reducerInjectors';

export default ({ key, reducer }) => (WrappedComponent) => {
  class ReducerInjector extends React.Component {
    static contextTypes = {
      store: shape({}).isRequired
    };

    injectors = getInjectors(this.context.store);

    componentWillMount() {
      const { injectReducer } = this.injectors;

      injectReducer(key, reducer);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return hoistNonReactStatics(ReducerInjector, WrappedComponent);
};
