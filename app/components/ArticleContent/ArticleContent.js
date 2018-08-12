import React from 'react';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';
import BlockContent from '@sanity/block-content-to-react';
import sanity from 'utils/sanityProvider';

import './ArticleContent.scss';

const serializers = {
  types: {
    code: props => (
      <pre style={{backgroundColor: 'blue'}} data-language={props.node.language}>
        <code>{props.node.snippet}</code>
      </pre>
    )
  },
  marks: {
    pre: props => (
      <pre style={{backgroundColor: 'red'}} data-language={'javascript'}>
        {props.children}
      </pre>
    )
  }
}


const ArticleContent = ({ article }) => (
  <div className="article-content">
    <article className="title">
      <div>
        <h1>{article.title}</h1>
      </div>
      <div>
        <Link className="article-title" to="/blog">
          <span className="back-arrow">&#171;</span> <span>View all articles</span>
        </Link>
      </div>
    </article>
    <section>
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
  article: string.isRequired
};

export default ArticleContent;

