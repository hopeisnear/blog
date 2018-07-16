import { fromJS } from 'immutable';
import { createReducer } from '../../utils/create-reducer';
import { FETCH_ARTICLES_RESPONDED } from './Articles/articles-actions';
import { FETCH_ARTICLE_RESPONDED } from './Article/article-actions';


const initialState = fromJS({
  articles: []
});

const blogReducer = createReducer(initialState, {
  [FETCH_ARTICLES_RESPONDED](state, action) {
    return state.set('articles', fromJS(action.response));
  },
  [FETCH_ARTICLE_RESPONDED](state, action) {
    const articles = state.get('articles').mergeWith((oldValue, newValue) => ((newValue === null) ? oldValue : newValue), fromJS([action.response]));
    return state.set('articles', articles);
  }
});

export default blogReducer;
