import React from 'react';
import { string } from 'prop-types';
import BlockContent from '@sanity/block-content-to-react';
import sanity from 'utils/sanityProvider';

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
  <div>
    <article>{article.title}</article>
    <section>
      <BlockContent
        blocks={article.content}
        serializers={serializers}
        dataset={sanity.clientConfig.dataset}
        projectId={sanity.clientConfig.projectId}
        imageOptions={{w: 320, h: 240, fit: 'max'}}
      />
    </section>
  </div>
);


ArticleContent.propTypes = {
  article: string.isRequired
};

export default ArticleContent;

