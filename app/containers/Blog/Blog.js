import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Articles from 'containers/Articles/Loadable';
import Article from 'containers/Article/Loadable';

import './Blog.scss';

export default function Blog() {
  return (
    <Switch>
      <Route exact path="/" component={Articles} />
      <Route exact path="/:articleName" component={Article} />
    </Switch>
  );
}
