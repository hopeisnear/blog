import { createSelector } from 'reselect';

const selectArticle = () => createSelector(
  (state) => state.get('article'),
  (article) => article.get('article')
);

export { selectArticle };
