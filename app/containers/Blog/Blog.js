import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Articles from 'containers/Blog/Articles/Loadable';
import Article from 'containers/Blog/Article/Loadable';

import './Blog.scss';

export default function Blog() {
  return (
    <Switch>
      <Route exact path="/blog" component={Articles} />
      <Route exact path="/blog/:articleName" component={Article} />
    </Switch>
  );
}
