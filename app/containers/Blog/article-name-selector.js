import { createSelector } from 'reselect';

export const selectArticleName = () => createSelector(
  (state) => state.getIn(['route', 'location', 'pathname'], '/blog/'),
  (pathname) => {
    const articleName = pathname.split('/')[2] || '';
    return articleName.includes('?') ? articleName.split('?')[0] : articleName;
  }
);
