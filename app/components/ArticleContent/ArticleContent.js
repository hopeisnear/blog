import React from 'react';
import { shape } from 'prop-types';
import { Link } from 'react-router-dom';
import BlockContent from '@sanity/block-content-to-react';
import sanity from 'utils/sanityProvider';

import './ArticleContent.scss';

const serializers = {
  types: {
    code: (props) => (
      <pre style={{ backgroundColor: 'blue' }} data-language={props.node.language}>
        <code>{props.node.snippet}</code>
      </pre>
    )
  },
  marks: {
    pre: (props) => (
      <pre style={{ backgroundColor: 'red' }} data-language={'javascript'}>
        {props.children}
      </pre>
    )
  }
};


const ArticleContent = ({ article }) => (
  <div className="ArticleContent">
    <article className="article-content__header">
      <h1 className="header__title">{article.title}</h1>
      <Link className="header__link" to="/blog">
        <span className="back-arrow">&#171;</span> <span>View all articles</span>
      </Link>
    </article>
    <section className="article-content__body">
      <BlockContent
        blocks={article.content}
        serializers={serializers}
        dataset={sanity.clientConfig.dataset}
        projectId={sanity.clientConfig.projectId}
      />
    </section>
  </div>
);


ArticleContent.propTypes = {
  article: shape({}).isRequired
};

export default ArticleContent;

