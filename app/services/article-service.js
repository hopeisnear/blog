import { fetchJSON } from 'utils/request';

export function fetchArticle(articleId) {
  return fetchJSON(`/article/${articleId}`);
}

export function fetchArticles() {
  // return fetchJSON('/articles');
  return new Promise((resolve) => {
    resolve([{
      name: 'first_article',
      title: 'INFINITE STYLING – CHRISTMAS WINDOWS FOR GHD',
      created: '10-10-2018',
      tags: ['javascript', 'library'],
      preview: 'Millington Associates Produce – Infinite Styling Christmas windows for GHD A contrast between light and dark, visualising infinite possibilities and blurred',
      comments: 12
    }]);
  });
}
