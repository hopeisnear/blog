import { stub } from 'sinon';
import { createStoreMock } from 'utils/mockStoreCreator';
import * as articleService from 'services/article-service';
import { FETCH_ARTICLE_RESPONDED, fetchArticleAction } from '../article-actions';

describe('article-actions', () => {
  test('should fetch article', () => {
    stub(articleService, 'fetchArticle').returns(Promise.resolve('article'));
    const store = createStoreMock();

    return store.dispatch(fetchArticleAction('Test article'))
      .then(() => {
        const [fetchArticleResponded] = store.getActions();

        expect(fetchArticleResponded.type).toBe(FETCH_ARTICLE_RESPONDED);
        expect(fetchArticleResponded.article).toBe('article');
      });
  });

  afterEach(() => {
    articleService.fetchArticle.restore();
  });
});
