import { createSelector } from 'reselect';
import { selectArticleName } from '../article-name-selector';

const selectArticle = () => createSelector(
  (state) => state.getIn(['blog', 'articles']),
  selectArticleName(),
  (articles, articleName) => {
    const containsArticle = articles.some((article) => article.get('name') === articleName && article.has('details'));
    return containsArticle ? articles.find((article) => article.get('name') === articleName).get('details') : undefined;
  }
);

export { selectArticle, selectArticleName };
