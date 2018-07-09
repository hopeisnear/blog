import { fetchArticles } from 'services/article-service';

export const FETCH_ARTICLES_REQUESTED = 'FETCH_ARTICLES_REQUESTED';
export const FETCH_ARTICLES_RESPONDED = 'FETCH_ARTICLES_RESPONDED';

export function fetchArticlesAction() {
  return (dispatch) => {
    dispatch({ type: FETCH_ARTICLES_REQUESTED });
    return fetchArticles()
      .then((response) => {
        dispatch({ type: FETCH_ARTICLES_RESPONDED, response });
      });
  };
}
