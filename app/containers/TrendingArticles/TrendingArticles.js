import React, { PureComponent } from 'react';
import { arrayOf, shape, func } from 'prop-types';
import { Link } from 'react-router-dom';
import { imageUrlFor } from 'utils/imageLoader';
import './TrendingArticles.scss';

export default class TrendingArticles extends PureComponent {
  componentDidMount() {
    this.props.fetchTrendingArticles();
  }

  render() {
    return (
      <div className="TrendingArticles">
        <div className="trending-articles__header">Trending articles</div>
        <div className="trending-articles__body">
          <nav>
            {this.props.trendingArticles.map(trendingArticle => (
              <Link key={trendingArticle.slug.current} className="trending-articles__link" to={`/blog/${trendingArticle.slug.current}`}>
                <span className="trending-articles__image">
                  <img
                    src={imageUrlFor(trendingArticle.image)
                      .ignoreImageParams()
                      .width(360)
                      .height(252)}
                    alt="article heading"
                  />
                </span>
                <span className="trending-articles__title">{trendingArticle.title}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    );
  }
}

TrendingArticles.propTypes = {
  trendingArticles: arrayOf(shape({})).isRequired,
  fetchTrendingArticles: func.isRequired
};
