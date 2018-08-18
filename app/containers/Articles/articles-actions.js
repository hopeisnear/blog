import { fetchArticles } from 'services/article-service';
import { FETCH_ARTICLES_RESPONDED } from 'common/article-actions';

export function fetchArticlesAction() {
  return dispatch => fetchArticles()
    .then((articles) => {
      dispatch({ type: FETCH_ARTICLES_RESPONDED, articles });
    });
}
