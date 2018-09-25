import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import Blog from 'containers/Blog/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

const App = () => (
  <div className="App">
    <Helmet titleTemplate="Good developer" defaultTitle="Good developer">
      <meta name="description" content="A Good developer blog" />
    </Helmet>
    <Header />
    <main role="main">
      <Switch>
        <Route path="/" component={Blog} />
      </Switch>
    </main>
    <Footer />
  </div>
);

export default App;
