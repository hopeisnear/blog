import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Panel from '../../components/Panel/Panel';
import './style.scss';

export default class HomePage extends React.PureComponent {
  render() {
    return (
      <article className="home-page">
        <Helmet>
          <title>{'< awesome developer >'}</title>
          <meta name="description" content="< Home >" />
        </Helmet>
        <div className="home-page">
          <section className="articles">
            <Panel/>
            <Panel/>
            <Panel/>
            <Panel/>
          </section>
          <section className="about">
            <div>
              qwerty
            </div>
            <div>
              qwerty
            </div>
            <div>
              qwerty
            </div>
          </section>
        </div>
      </article>
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
