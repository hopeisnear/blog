import { fromJS } from 'immutable';
import { createReducer } from 'utils/create-reducer';
import { FETCH_ARTICLE_REQUESTED, FETCH_ARTICLE_RESPONDED } from './article-actions';

const initialState = fromJS({
  article: undefined
});

const articleReducer = createReducer(initialState, {
  [FETCH_ARTICLE_REQUESTED](state) {
    return state.set('article', undefined);
  },
  [FETCH_ARTICLE_RESPONDED](state, action) {
    return state.set('article', action.response);
  }
});

export default articleReducer;
