import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import App from 'containers/App';

import 'sanitize.css/sanitize.css';
import 'styles/theme.scss';

import configureStore from './configureStore';
import { LOCATION_CHANGED } from './reducers';

const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);

const APP_ROOT = document.getElementById('app');

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" render={() => <App />} />
      </Router>
    </Provider>,
    APP_ROOT
  );
};

history.listen((location) => {
  store.dispatch({
    type: LOCATION_CHANGED,
    location
  });
});

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['containers/App'], () => {
    ReactDOM.unmountComponentAtNode(APP_ROOT);
    render();
  });
}

render();
