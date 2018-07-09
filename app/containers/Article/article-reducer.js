import { fromJS } from 'immutable';
import { createReducer } from 'utils/create-reducer';
import { FETCH_ARTICLE_REQUESTED, FETCH_ARTICLE_RESPONDED } from './article-actions';

const initialState = fromJS({
  article: {}
});

export const articleReducer = createReducer(initialState, {
  [FETCH_ARTICLE_REQUESTED](state) {
    return state.set('article', fromJS({}));
  },
  [FETCH_ARTICLE_RESPONDED](state, action) {
    return state.set('article', fromJS(action.response));
  }
});

export default articleReducer;
