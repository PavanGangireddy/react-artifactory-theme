import React from 'react';
import { Route, IndexRoute } from 'react-router';
import SearchResultContainer from './containers/search-results';
import DescriptionPageBody from './components/DescriptionPageBody';

import LandingPageContainer from './containers/landing-page-container';
import MostInstalledContainer from './containers/most-installed-container';
import LandingPageBody from './components/LandingPageBody';
const allRoutes = () => {
  return (
    <Route path="/" component={LandingPageContainer}>
      <IndexRoute component={LandingPageBody}/>
      <Route path='/results' component={SearchResultContainer} />
      <Route path= '/details' component= {DescriptionPageBody}  />
    </Route>
  );
};

export default allRoutes;
