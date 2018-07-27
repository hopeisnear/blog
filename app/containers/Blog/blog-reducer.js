import { Map } from 'immutable';
import { unionBy } from 'lodash';
import { createReducer } from '../../utils/create-reducer';
import { FETCH_ARTICLES_RESPONDED } from './Articles/articles-actions';
import { FETCH_ARTICLE_RESPONDED } from './Article/article-actions';

const initialState = Map({
  articles: []
});

const blogReducer = createReducer(initialState, {
  [FETCH_ARTICLES_RESPONDED](state, action) {
    return state.set('articles', action.articles);
  },
  [FETCH_ARTICLE_RESPONDED](state, action) {
    const articles = state.get('articles');
    return state.set('articles', unionBy([action.article], articles, 'id'));
  }
});

export default blogReducer;
