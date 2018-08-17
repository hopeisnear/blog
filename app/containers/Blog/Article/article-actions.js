import { fetchArticle } from 'services/article-service';
import { selectArticleName } from './article-selector';

export const FETCH_ARTICLE_RESPONDED = 'FETCH_ARTICLE_RESPONDED';

export function fetchArticleAction() {
  return (dispatch, getState) => fetchArticle(selectArticleName()(getState()))
    .then((article) => {
      dispatch({ type: FETCH_ARTICLE_RESPONDED, article });
    });
}
