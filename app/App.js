import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, Redirect } from 'react-router-dom';

import Blog from 'containers/Blog/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import './style.scss';

const App = () => (
  <div className="app-container">
    <Helmet key="one" titleTemplate="%s - React.js Boilerplate" defaultTitle="React.js Boilerplate" >
      <meta name="description" content="A React.js Boilerplate application" />
    </Helmet>
    <Header className="header-container" />
    <main role="main">
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/blog" />} />
        <Route path="/blog" component={Blog} />
      </Switch>
    </main>
    <Footer className="footer-container" />
  </div>
);

export default App;
