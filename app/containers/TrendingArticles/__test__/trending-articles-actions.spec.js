import { stub } from 'sinon';
import { createStoreMock } from 'utils/mockStoreCreator';
import * as articleService from 'services/article-service';
import { FETCH_TRENDING_ARTICLES_RESPONDED } from 'common/article-actions';
import { fetchTrendingArticlesAction } from '../trending-articles-actions';

describe('trending-articles-actions', () => {
  test('should fetch trending articles', () => {
    stub(articleService, 'fetchTrendingArticles').returns(Promise.resolve([{ _id: '1' }]));
    const store = createStoreMock();

    return store.dispatch(fetchTrendingArticlesAction()).then(() => {
      const [fetchTrendingArticlesResponded] = store.getActions();

      expect(fetchTrendingArticlesResponded.type).toBe(FETCH_TRENDING_ARTICLES_RESPONDED);
      expect(fetchTrendingArticlesResponded.trendingArticles).toEqual([{ _id: '1' }]);
    });
  });

  afterEach(() => {
    articleService.fetchTrendingArticles.restore();
  });
});
