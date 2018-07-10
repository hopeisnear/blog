import React from 'react';
import { Helmet } from 'react-helmet';
import Articles from 'containers/Articles';
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
          <Articles />
        </div>
      </div>
    );
  }
}

// HomePage.propTypes = {
//   loading: PropTypes.bool,
//   error: PropTypes.oneOfType([
//     PropTypes.object,
//     PropTypes.bool,
//   ]),
//   repos: PropTypes.oneOfType([
//     PropTypes.array,
//     PropTypes.bool,
//   ]),
//   onSubmitForm: PropTypes.func,
//   username: PropTypes.string,
//   onChangeUsername: PropTypes.func,
// };
