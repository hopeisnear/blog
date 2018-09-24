import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createReducer, { LOCATION_CHANGED } from './reducers';

// eslint-disable-next-line no-unused-vars
const trackingMiddleware = store => next => action => {
  if (action.type === LOCATION_CHANGED) {
    ga('send', 'pageview', action.location.pathname);
  } else {
    ga('send', 'event', 'Action', action.type);
  }
  return next(action);
};

export default function configureStore(initialState) {
  const enhancers = [applyMiddleware(thunk, trackingMiddleware)];

  const store = createStore(createReducer(), initialState, compose(...enhancers));

  store.injectedReducers = {};

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createReducer(store.injectedReducers));
    });
  }

  return store;
}
