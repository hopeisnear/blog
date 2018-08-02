import React, { PureComponent } from 'react';
import { func, array } from 'prop-types';
import { isEmpty } from 'lodash';
import ArticleHeading from 'components/ArticleHeading';

import './Articles.scss';

export default class Articles extends PureComponent {
  componentDidMount() {
    if (isEmpty(this.props.articles)) {
      this.props.fetchArticles();
    }
  }

  render() {
    return (
      <section className="blog-articles-section">
        <div className="blog-articles">
          <div className="blog-articles-list">
            {this.props.articles.map((article) => (<div key={article.slug.current}><ArticleHeading article={article} /></div>))}
          </div>
          <div className="blog-articles-sidebar">
            <div>
              <div className="blog_categories for-extra">
                <div className="blog-block-header">Topics</div>
                <nav className="blog-block">
                  <ul className="blog_categories-list">
                    <li className="blog_categories-list_item">
                      <a href="https://www.toptal.com/developers/blog/back-end">
                        Back-end
                      </a>
                    </li>
                    <li className="blog_categories-list_item">
                      <a href="https://www.toptal.com/developers/blog/web-front-end">
                      Web front-end
                      </a>
                    </li>
                    <li className="blog_categories-list_item">
                      <a href="https://www.toptal.com/developers/blog/mobile">Mobile</a>
                    </li>
                    <li className="blog_categories-list_item">
                      <a href="https://www.toptal.com/developers/blog/lifestyle">Lifestyle</a>
                    </li>
                    <li className="blog_categories-list_item">
                      <a href="https://www.toptal.com/developers/blog/data-science-and-databases">
                        Data Science and Databases
                      </a>
                    </li>
                    <li className="blog_categories-list_item">
                      <a href="https://www.toptal.com/developers/blog/technology">
                      Technology
                      </a>
                    </li>
                    <li className="blog_categories-list_item">
                      <a href="https://www.toptal.com/developers/blog/project-management">
                        Project Management
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
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
