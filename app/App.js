import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import { ANALYTICS_APP_ID, FACEBOOK_APP_ID } from 'common/env';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Blog from 'containers/Blog';

const App = () => (
  <div className="App">
    <Helmet>
      <link rel="alternate" href={`${window.location.origin}${window.location.pathname}${window.location.hash}`} hrefLang="en" />
      <link rel="canonical" href={`${window.location.origin}${window.location.pathname}${window.location.hash}`} />
      <meta property="og:url" content={`${window.location.origin}${window.location.pathname}${window.location.hash}`} />
      <meta property="fb:app_id" content={FACEBOOK_APP_ID} />
      <meta name="google-analytics" content={ANALYTICS_APP_ID} />
      <meta name="hostname" content={window.location.hostname} />
      <meta name="expected-hostname" content={window.location.hostname} />
      <script async src="https://www.google-analytics.com/analytics.js" />
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
