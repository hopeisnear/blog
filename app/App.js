import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, Redirect } from 'react-router-dom';

import Blog from 'containers/Blog/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import './style.scss';

const App = () => (
  <div className="app-container">
    <Helmet titleTemplate="Good developer" defaultTitle="Good developer" >
      <meta name="description" content="A Good developer blog" />
    </Helmet>
    <Header />
    <main role="main">
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/blog" />} />
        <Route path="/blog" component={Blog} />
      </Switch>
    </main>
    <Footer />
  </div>
);

export default App;
