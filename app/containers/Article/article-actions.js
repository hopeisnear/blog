import { fetchArticle } from 'services/article-service';

export const FETCH_ARTICLE_REQUESTED = 'FETCH_ARTICLE_REQUESTED';
export const FETCH_ARTICLE_RESPONDED = 'FETCH_ARTICLE_RESPONDED';

export function fetchArticleAction(articleId) {
  return (dispatch) => {
    dispatch({ type: FETCH_ARTICLE_REQUESTED, articleId });
    return fetchArticle(articleId)
      .then((response) => {
        dispatch({ type: FETCH_ARTICLE_RESPONDED, response });
      });
  };
}
