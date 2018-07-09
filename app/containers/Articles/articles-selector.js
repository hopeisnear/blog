import { createSelector } from 'reselect';

const selectArticles = () => createSelector(
  (state) => state.get('articles'),
  (articles) => articles.get('articles')
);

export { selectArticles };
