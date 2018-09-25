import { Map } from 'immutable';
import { unionBy } from 'lodash';
import { createReducer } from 'utils/create-reducer';
import { FETCH_ARTICLE_RESPONDED, FETCH_ARTICLES_RESPONDED, FETCH_TRENDING_ARTICLES_RESPONDED } from 'events/article-events';
import { ADD_COMMENT_RESPONDED } from 'events/comment-events';

const initialState = Map({
  articles: [],
  trendingArticles: []
});

const blogReducer = createReducer(initialState, {
  [FETCH_ARTICLES_RESPONDED](state, action) {
    return state.set('articles', action.articles);
  },
  [FETCH_TRENDING_ARTICLES_RESPONDED](state, action) {
    return state.set('trendingArticles', action.trendingArticles);
  },
  [FETCH_ARTICLE_RESPONDED](state, action) {
    const articles = state.get('articles');
    return state.set('articles', unionBy([action.article], articles, '_id'));
  },
  [ADD_COMMENT_RESPONDED](state, action) {
    const articles = state.get('articles');
    return state.set('articles', unionBy([action.updatedArticle], articles, '_id'));
  }
});

export default blogReducer;
