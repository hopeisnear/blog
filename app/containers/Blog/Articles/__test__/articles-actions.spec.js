import { stub } from 'sinon';
import { createStoreMock } from 'utils/mockStoreCreator';
import * as articleService from 'services/article-service';
import { FETCH_ARTICLES_RESPONDED, fetchArticlesAction } from '../articles-actions';

describe('articles-actions', () => {
  test('should fetch articles', () => {
    stub(articleService, 'fetchArticles').returns(Promise.resolve([{ _id: '1' }]));
    const store = createStoreMock();

    return store.dispatch(fetchArticlesAction())
      .then(() => {
        const [fetchArticlesResponded] = store.getActions();

        expect(fetchArticlesResponded.type).toBe(FETCH_ARTICLES_RESPONDED);
        expect(fetchArticlesResponded.articles).toEqual([{ _id: '1' }]);
      });
  });

  afterEach(() => {
    articleService.fetchArticles.restore();
  });
});
