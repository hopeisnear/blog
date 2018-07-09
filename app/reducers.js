import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';

import globalReducer from 'containers/App/reducer';

export const LOCATION_CHANGED = 'LOCATION_CHANGED';

const routeInitialState = fromJS({
  location: null,
});

function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    case LOCATION_CHANGED:
      debugger;
      return state.merge({
        location: action.payload,
      });
    default:
      return state;
  }
}

export default function createReducer(injectedReducers) {
  return combineReducers({
    route: routeReducer,
    global: globalReducer,
    ...injectedReducers,
  });
}
