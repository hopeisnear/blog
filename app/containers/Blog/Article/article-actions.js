import { fetchArticle } from 'services/article-service';

export const FETCH_ARTICLE_RESPONDED = 'FETCH_ARTICLE_RESPONDED';

export function fetchArticleAction(articleName) {
  return (dispatch) => fetchArticle(articleName)
    .then((article) => {
      dispatch({ type: FETCH_ARTICLE_RESPONDED, article });
    });
}
