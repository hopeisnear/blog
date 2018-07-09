import { fromJS } from 'immutable';
import { createReducer } from 'utils/create-reducer';
import { FETCH_ARTICLES_REQUESTED, FETCH_ARTICLES_RESPONDED } from './articles-actions';

const initialState = fromJS({
  articles: []
});

const articlesReducer = createReducer(initialState, {
  [FETCH_ARTICLES_REQUESTED](state) {
    return state.set('articles', fromJS([]));
  },
  [FETCH_ARTICLES_RESPONDED](state, action) {
    return state.set('articles', fromJS(action.response));
  }
});

export default articlesReducer;
