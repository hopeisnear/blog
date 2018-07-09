import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import Articles from 'containers/Articles/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import './style.scss';

const App = () => (
  <div className="app-container">
    <Helmet key="one" titleTemplate="%s - React.js Boilerplate" defaultTitle="React.js Boilerplate" >
      <meta name="description" content="A React.js Boilerplate application" />
    </Helmet>
    <Header className="header-container" />
    <div className="app-body" role="document">
      <main role="main">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/articles" component={Articles} />
        </Switch>
      </main>
    </div>
    <Footer className="footer-container" />
  </div>
);

export default App;
