import { fetchArticles } from 'services/article-service';

export const FETCH_ARTICLES_RESPONDED = 'FETCH_ARTICLES_RESPONDED';

export function fetchArticlesAction() {
  return (dispatch) => fetchArticles()
    .then((response) => {
      dispatch({ type: FETCH_ARTICLES_RESPONDED, response });
    });
}
