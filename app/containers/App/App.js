import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import './style.scss';

const App = () => (
  <div className="app-container">
    <Helmet key="one" titleTemplate="%s - React.js Boilerplate" defaultTitle="React.js Boilerplate" >
      <meta name="description" content="A React.js Boilerplate application" />
    </Helmet>
    <Header className="app-header" />
    <div className="app-body">
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
    <Footer className="app-footer" />
  </div>
);

export default App;
