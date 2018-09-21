import { fetchArticle } from 'services/article-service';
import { FETCH_ARTICLE_RESPONDED } from 'common/article-actions';
import { selectArticleName } from './article-selector';

export function fetchArticleAction() {
  return (dispatch, getState) =>
    fetchArticle(selectArticleName()(getState())).then(article => {
      dispatch({ type: FETCH_ARTICLE_RESPONDED, article });
    });
}
