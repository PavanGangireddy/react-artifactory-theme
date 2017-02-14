import { combineReducers } from 'redux';
import frequentPackageDetailReducer from './freq-packages-reducer';
import searchResultsReducer from './search-results';
import landingPageBodyReducer from './landing-page-body';
import accordionReducer from './accordion';
import loginReducer from './login';
import linkReducer from './link';
const rootReducer = combineReducers({
  frqPackages:frequentPackageDetailReducer,
  searchResults:searchResultsReducer,
  landingPage:landingPageBodyReducer,
  accordion:accordionReducer,
  loginReducer,
  linkReducer
});

export default rootReducer;
