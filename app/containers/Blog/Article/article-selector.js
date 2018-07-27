import { createSelector } from 'reselect';
import { selectArticleName } from '../article-name-selector';

const selectArticle = () => createSelector(
  (state) => state.getIn(['blog', 'articles']),
  selectArticleName(),
  (articles, articleName) => articles.find((article) => article.id === articleName && article.content !== undefined)
);

export { selectArticle, selectArticleName };
