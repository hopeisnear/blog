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


// The initial state of the App
const initialState = fromJS({
  username: ''
});

export const homeReducer = createReducer(initialState, {
});

export default homeReducer;
