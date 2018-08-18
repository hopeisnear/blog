import { Map } from 'immutable';
import { selectArticleName, selectArticle } from '../article-selector';

describe('article-selector', () => {
  test('should select article name', () => {
    const articleName = selectArticleName()(Map({ route: Map({ location: { pathname: '/blog/test-article' } }) }));

    expect(articleName).toBe('test-article');
  });

  test('should select article name ignoring query parameters', () => {
    const articleName = selectArticleName()(Map({ route: Map({ location: { pathname: '/blog/test-article?from=10' } }) }));

    expect(articleName).toBe('test-article');
  });

  test('should select article', () => {
    const article = selectArticle()(Map({
      route: Map({ location: { pathname: '/blog/test-article?from=10' } }),
      blog: Map({ articles: [{ slug: { current: 'test-article' }, content: 'test-article-content' }] })
    }));

    expect(article).toEqual({ slug: { current: 'test-article' }, content: 'test-article-content' });
  });
});
