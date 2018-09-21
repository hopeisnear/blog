import { createSelector } from 'reselect';

const selectArticleName = () =>
  createSelector(
    state => state.getIn(['route', 'location']).pathname || '/blog/',
    pathname => {
      const articleName = pathname.split('/')[2] || '';
      return articleName.includes('?') ? articleName.split('?')[0] : articleName;
    }
  );

const selectArticle = () =>
  createSelector(state => state.getIn(['blog', 'articles']), selectArticleName(), (articles, articleName) =>
    articles.find(article => article.slug.current === articleName && article.content !== undefined)
  );

export { selectArticle, selectArticleName };
