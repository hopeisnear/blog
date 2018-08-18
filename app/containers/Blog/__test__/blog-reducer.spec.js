import { Map } from 'immutable';
import { FETCH_ARTICLE_RESPONDED, FETCH_ARTICLES_RESPONDED, FETCH_TRENDING_ARTICLES_RESPONDED } from 'common/article-actions';
import { ADD_COMMENT_RESPONDED } from 'common/comment-actions';
import blogReducer from '../blog-reducer';

describe('blog-reducer', () => {
  test('should validate FETCH_ARTICLES_RESPONDED', () => {
    const state = blogReducer(Map({ articles: undefined }), { type: FETCH_ARTICLES_RESPONDED, articles: [{ _id: '1' }] });

    expect(state.get('articles')).toEqual([{ _id: '1' }]);
  });

  test('should validate FETCH_ARTICLE_RESPONDED', () => {
    const state = blogReducer(Map({ articles: [{ _id: '1' }] }), { type: FETCH_ARTICLE_RESPONDED, article: { _id: '1', content: 'test article' } });

    expect(state.get('articles')).toEqual([{ _id: '1', content: 'test article' }]);
  });

  test('should validate ADD_COMMENT_RESPONDED', () => {
    const state = blogReducer(Map({ articles: [{ _id: '1' }] }), { type: ADD_COMMENT_RESPONDED, updatedArticle: { _id: '1', content: 'test article' } });

    expect(state.get('articles')).toEqual([{ _id: '1', content: 'test article' }]);
  });

  test('should validate FETCH_TRENDING_ARTICLES_RESPONDED', () => {
    const state = blogReducer(undefined, { type: FETCH_TRENDING_ARTICLES_RESPONDED, trendingArticles: [{ _id: '1' }] });

    expect(state.get('trendingArticles')).toEqual([{ _id: '1' }]);
  });
});
