import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import ArticleContent from 'components/ArticleContent';
import Panel from '../../components/Panel/Panel';
import './style.scss';

export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div className="home-page">
        <Helmet>
          <title>{'< awesome developer >'}</title>
          <meta name="description" content="< Home >" />
        </Helmet>
        <div>
          <ArticleContent />
          <ArticleContent />
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  repos: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};
