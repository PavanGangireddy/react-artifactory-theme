import { combineReducers } from 'redux';
import frequentPackageDetailReducer from './freq-packages-reducer';
import searchResultsReducer from './search-results';
import landingPageBodyReducer from './landing-page-body';
import accordionReducer from './accordion';
import loginReducer from './login'
const rootReducer = combineReducers({
  frqPackages:frequentPackageDetailReducer,
  searchResults:searchResultsReducer,
  landingPage:landingPageBodyReducer,
  accordion:accordionReducer,
  loginReducer
});

export default rootReducer;
