import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { fetchTrendingArticlesAction } from './trending-articles-actions';
import { selectTrendingArticles } from './trending-articles-selector';
import TrendingArticles from './TrendingArticles';

const mapDispatchToProps = dispatch => ({
  fetchTrendingArticles: () => dispatch(fetchTrendingArticlesAction())
});

const mapStateToProps = createStructuredSelector({
  trendingArticles: selectTrendingArticles()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(TrendingArticles);
export { mapDispatchToProps };
