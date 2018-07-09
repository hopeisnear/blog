/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import showdown from 'showdown';
import { Helmet } from 'react-helmet';

import './style.scss';

const converter = new showdown.Converter(),
  html = converter.makeHtml('# test');

export default class FeaturePage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="feature-page">
        <Helmet>
          <title>Feature Page</title>
          <meta
            name="description"
            content="Feature page of React.js Boilerplate application"
          />
        </Helmet>
        <div><span dangerouslySetInnerHTML={{ __html: html }} /></div>
      </div>
    );
  }
}
