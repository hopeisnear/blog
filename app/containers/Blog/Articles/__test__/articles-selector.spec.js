import { Map } from 'immutable';
import { selectArticles } from '../articles-selector';

describe('articles-selector', () => {
  test('should select articles', () => {
    const articles = selectArticles()(Map({ blog: Map({ articles: [{ _id: '1' }] }) }));

    expect(articles).toEqual([{ _id: '1' }]);
  });
});
