import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Articles from 'containers/Blog/Articles/Loadable';
import Article from 'containers/Blog/Article/Loadable';
import './style.scss';

const Blog = () => (
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

export default Blog;

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
