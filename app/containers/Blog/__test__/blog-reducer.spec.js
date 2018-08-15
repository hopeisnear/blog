import { Map } from 'immutable';
import blogReducer from '../blog-reducer';
import { FETCH_ARTICLES_RESPONDED } from '../Articles/articles-actions';
import { FETCH_ARTICLE_RESPONDED } from '../Article/article-actions';
import { ADD_COMMENT_RESPONDED } from '../AddComment/add-comment-actions';

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
});
