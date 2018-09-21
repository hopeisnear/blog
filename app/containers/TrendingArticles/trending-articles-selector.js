import { createSelector } from 'reselect';

const selectTrendingArticles = () => createSelector(state => state.get('blog'), blog => blog.get('trendingArticles'));

export { selectTrendingArticles };
