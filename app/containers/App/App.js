import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import './style.scss';

const App = () => (
  <div className="app">
    <Helmet key="one" titleTemplate="%s - React.js Boilerplate" defaultTitle="React.js Boilerplate" >
      <meta name="description" content="A React.js Boilerplate application" />
    </Helmet>
    <Header />
    <div className="body">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/features" component={FeaturePage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </div>
    <Footer />
  </div>
);

export default App;
