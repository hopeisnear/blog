import { fetchJSON } from 'utils/request';

export function fetchArticle(articleId) {
  return fetchJSON(`/article/${articleId}`);
}
