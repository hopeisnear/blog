import { Map } from 'immutable';
import { selectTrendingArticles } from '../trending-articles-selector';

describe('trending-articles-selector', () => {
  test('should select trending articles', () => {
    const trendingArticles = selectTrendingArticles()(Map({ blog: Map({ trendingArticles: [{ _id: '1' }] }) }));

    expect(trendingArticles).toEqual([{ _id: '1' }]);
  });
});
