import { fetchArticles } from 'services/article-service';
import { FETCH_ARTICLES_RESPONDED } from 'common/article-actions';
import { GET_IN_TOUCH_CLICKED } from 'events/analytics-events';

export function fetchArticlesAction() {
  return dispatch =>
    fetchArticles().then(articles => {
      dispatch({ type: FETCH_ARTICLES_RESPONDED, articles });
    });
}

export function registerGetInTouchClick(website) {
  return {
    type: GET_IN_TOUCH_CLICKED,
    website
  };
}
