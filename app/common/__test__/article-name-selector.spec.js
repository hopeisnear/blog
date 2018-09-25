import { Map } from 'immutable';
import { selectArticleName } from '../article-name-selector';

describe('article-names-selector', () => {
  test('should select article name', () => {
    const articleName = selectArticleName()(Map({ route: Map({ location: { pathname: '/test-article' } }) }));

    expect(articleName).toBe('test-article');
  });

  test('should select article name ignoring query parameters', () => {
    const articleName = selectArticleName()(Map({ route: Map({ location: { pathname: '/test-article?from=10' } }) }));

    expect(articleName).toBe('test-article');
  });
});
