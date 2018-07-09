import { fetchJSON } from 'utils/request';

export function fetchArticle(articleId) {
  return fetchJSON(`/article/${articleId}`);
}

export function fetchArticles() {
  // return fetchJSON('/articles');
  return new Promise((resolve) => {
    resolve([{
      id: '1'
    }]);
  });
}
