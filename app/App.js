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
      <title>GOOD dev - blog about programming best practices</title>
      <meta name="description" content="Good dev blog contains set of example based information how to build better software." />
      <link rel="alternate" href={`${window.location.origin}${window.location.pathname}${window.location.hash}`} hrefLang="en" />
      <link rel="canonical" href={`${window.location.origin}${window.location.pathname}${window.location.hash}`} />
      <meta property="og:site_name" content="GOOD dev" />
      <meta property="og:title" content="Good developer, best practices blog" />
      <meta property="og:description" content="Good dev blog is where developers can find information how to build a better software." />
      <meta property="og:image" content="images/gooddev-logo.png" />
      <meta property="og:url" content={`${window.location.origin}${window.location.pathname}${window.location.hash}`} />
      <meta property="fb:app_id" content={FACEBOOK_APP_ID} />
      <meta name="google-analytics" content={ANALYTICS_APP_ID} />
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
