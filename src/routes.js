import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';


import DescriptionPageBody from './components/DescriptionPageBody';
import StepsPageBody from './components/StepsPageBody';

import SearchResultContainer from './containers/search-results';
import LandingPageContainer from './containers/landing-page';
import MostInstalledContainer from './containers/most-installed';
import LandingPageBodyContainer from './containers/landing-page-body';
import LoginContainer from './containers/login';

import { authTransition } from './utility';

const allRoutes = () => {
  return (
  	<Router history={browserHistory} >
      <Route path="/login" component={LoginContainer}></Route>
  	   <Route path="/" component={LandingPageContainer} onEnter={authTransition}>
	         <IndexRoute component={LandingPageBodyContainer}/>
	         <Route path='/results/keyword=:query' component={SearchResultContainer} />
	         <Route path= '/module/:moduleName' component= {DescriptionPageBody}  />
	        <Route path= '/steps-to-publish' component= {StepsPageBody} />
	     </Route>
    </Router>
  );
};

export default allRoutes;
