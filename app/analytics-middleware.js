import { LOCATION_CHANGED } from './events/location-events';
import { GET_IN_TOUCH_CLICKED } from './events/analytics-events';

// eslint-disable-next-line no-unused-vars
const analyticsMiddleware = store => next => action => {
  if (action.type === LOCATION_CHANGED) {
    ga('send', 'pageview', action.location.pathname);
  } else if (GET_IN_TOUCH_CLICKED) {
    ga('send', 'event', 'link', GET_IN_TOUCH_CLICKED, action.website);
  } else {
    ga('send', 'event', 'Action', action.type);
  }
  return next(action);
};

export default analyticsMiddleware;
