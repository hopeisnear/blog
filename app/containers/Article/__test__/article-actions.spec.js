import { stub, assert } from 'sinon';
import { createStoreMock } from 'utils/mockStoreCreator';
import * as articleService from 'services/article-service';
import * as articleSelector from 'containers/Article/article-selector';
import { FETCH_ARTICLE_RESPONDED } from 'common/article-actions';
import { fetchArticleAction } from '../article-actions';

describe('article-actions', () => {
  test('should fetch article', () => {
    stub(articleSelector, 'selectArticleName').returns(() => 'test-article');
    stub(articleService, 'fetchArticle').returns(Promise.resolve('article'));
    const store = createStoreMock();

    return store.dispatch(fetchArticleAction('Test article')).then(() => {
      const [fetchArticleResponded] = store.getActions();

      expect(fetchArticleResponded.type).toBe(FETCH_ARTICLE_RESPONDED);
      expect(fetchArticleResponded.article).toBe('article');
      assert.calledWithExactly(articleService.fetchArticle, 'test-article');
    });
  });

  afterEach(() => {
    articleService.fetchArticle.restore();
    articleSelector.selectArticleName.restore();
  });
});
