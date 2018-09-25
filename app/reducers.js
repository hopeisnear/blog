import { Map } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { USER_LOGGED_IN, USER_LOGGED_OUT } from 'events/login-events';
import { LOCATION_CHANGED } from 'events/location-events';

function routeReducer(state = Map({ location: undefined }), action) {
  switch (action.type) {
    case LOCATION_CHANGED:
      return state.merge({
        location: action.location
      });
    default:
      return state;
  }
}

function loginReducer(state = Map({ loginProvider: undefined, user: undefined }), action) {
  switch (action.type) {
    case USER_LOGGED_IN:
      return state.merge({
        loginProvider: action.loginProvider,
        user: action.user
      });
    case USER_LOGGED_OUT:
      return state.merge({
        loginProvider: undefined,
        user: undefined
      });
    default:
      return state;
  }
}

export default function createReducer(injectedReducers) {
  return combineReducers({
    route: routeReducer,
    login: loginReducer,
    ...injectedReducers
  });
}
