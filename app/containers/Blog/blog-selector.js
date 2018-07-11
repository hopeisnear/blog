import { createSelector } from 'reselect';

const selectArticleName = () => createSelector(
  (state) => 'first_blog',
  (articleName) => articleName
);

export { selectArticleName };
