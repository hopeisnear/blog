import { stub } from 'sinon';
import * as sanityProvider from 'utils/sanityProvider';
import { fetchArticle, fetchArticles } from '../article-service';

describe('article-service', () => {
  test('should fetch articles', () => {
    stub(sanityProvider, 'fetch').returns(Promise.resolve(['article1', 'article2']));

    const articles = fetchArticles();

    expect(articles).toEqual(['article1', 'article2']);
  });

  test('should fetch article', () => {
    stub(sanityProvider, 'fetch').returns(Promise.resolve(['response']));

    const article = fetchArticle('test-article');

    expect(sanityProvider.fetch.args[0][0]).contains('test-article');
    expect(article).toBe('response');
  });

  afterEach(() => {
    sanityProvider.fetch.restore();
  });
});
