import React, { PureComponent } from 'react';
import { func, arrayOf, shape } from 'prop-types';
import ArticleHeading from 'components/ArticleHeading';
import AboutAuthor from 'components/AboutAuthor';
import GetInTouch from 'components/GetInTouch';
import TrendingArticles from 'containers/TrendingArticles/Loadable';

import './Articles.scss';

export default class Articles extends PureComponent {
  componentDidMount() {
    this.props.fetchArticles();
  }

  render() {
    const { articles } = this.props;

    return (
      <section className="articles">
        <div className="articles__layout">
          <div className="articles__list">
            {articles.map(article => (
              <div key={article.slug.current}>
                <ArticleHeading article={article} />
              </div>
            ))}
          </div>
          <div className="articles__sidebar">
            <div>
              <AboutAuthor />
              <GetInTouch />
              <TrendingArticles />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Articles.propTypes = {
  articles: arrayOf(shape({})).isRequired,
  fetchArticles: func.isRequired
};
