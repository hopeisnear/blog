import React, { PureComponent } from 'react';
import { func, array } from 'prop-types';
import ArticleHeading from 'components/ArticleHeading';
import AboutAuthor from 'components/AboutAuthor';
import GetInTouch from 'components/GetInTouch';
import TrendingArticles from 'components/TrendingArticles';

import './Articles.scss';

export default class Articles extends PureComponent {
  componentDidMount() {
    this.props.fetchArticles();
  }

  render() {
    return (
      <section className="articles">
        <div className="articles__layout">
          <div className="articles__list">
            {this.props.articles.map((article) => (<div key={article.slug.current}><ArticleHeading article={article} /></div>))}
          </div>
          <div className="articles__sidebar">
            <div>
              <AboutAuthor />
              <GetInTouch />
              <TrendingArticles articles={this.props.articles} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Articles.propTypes = {
  articles: array.isRequired,
  fetchArticles: func.isRequired
};
