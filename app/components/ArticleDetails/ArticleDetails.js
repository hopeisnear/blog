import React from 'react';
import showdown from 'showdown';

const showdownConverter = new showdown.Converter();

const ArticleDetails = ({ article }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: showdownConverter.makeHtml(article) }} />
  );
};


ArticleDetails.propTypes = {

};

export default ArticleDetails;

