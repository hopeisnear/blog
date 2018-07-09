import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import thunk from 'redux-thunk';
import createReducer from './reducers';


export default function configureStore(initialState = {}) {
  const enhancers = [
    applyMiddleware(thunk),
  ];

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    compose(...enhancers)
  );

  store.injectedReducers = {};

  // Make reducers hot reloadable
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createReducer(store.injectedReducers));
    });
  }

  return store;
}
