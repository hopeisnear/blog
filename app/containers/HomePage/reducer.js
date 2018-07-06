/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';
import { createReducer } from '../../utils/create-reducer';

import { CHANGE_USERNAME } from './constants';

// The initial state of the App
const initialState = fromJS({
  username: ''
});

export const homeReducer = createReducer(initialState, {
  [CHANGE_USERNAME](state, action) {
    debugger;
    return state.set('username', action.name.replace(/@/gi, ''));
  }
});

export default homeReducer;
