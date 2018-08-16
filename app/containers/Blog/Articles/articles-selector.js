import { createSelector } from 'reselect';

const selectArticles = () => createSelector(
  state => state.get('blog'),
  blog => blog.get('articles')
);

export { selectArticles };
