import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Panel from '../../components/Panel/Panel';
import Article from '../../components/Article/Article';
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
          <Article />
          <Article />
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
