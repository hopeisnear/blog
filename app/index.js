import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { fromJS } from 'immutable';
import 'sanitize.css/sanitize.css';
import 'styles/theme.scss';
import App from './App';

import configureStore from './configureStore';
import { LOCATION_CHANGED } from './reducers';

const history = createHistory();
const initialState = fromJS({ route: { location: history.location } });
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
  module.hot.accept(['./App'], () => {
    ReactDOM.unmountComponentAtNode(APP_ROOT);
    render();
  });
}

render();
