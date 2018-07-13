import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Articles from 'containers/Articles/Loadable';
import Article from 'containers/Article/Loadable';
import './style.scss';

export default class Blog extends React.PureComponent {
  render() {
    console.log(this.props.articleName)
    return (
      <div className="blog">
        <Helmet>
          <title>{'< awesome developer >'}</title>
          <meta name="description" content="< Blog home >" />
        </Helmet>
        <div>
          <Switch>
            <Route exact path="/blog" component={Articles} />
            <Route exact path="/blog/:articleName" component={Article} />
          </Switch>
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
