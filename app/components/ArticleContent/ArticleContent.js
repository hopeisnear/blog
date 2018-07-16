import React from 'react';
import { string } from 'prop-types';
import showdown from 'showdown';

const showdownConverter = new showdown.Converter();

const ArticleContent = ({ article }) => (
  <div dangerouslySetInnerHTML={{ __html: showdownConverter.makeHtml(article) }} />
);


ArticleContent.propTypes = {
  article: string.isRequired
};

export default ArticleContent;

