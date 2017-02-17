import { combineReducers } from 'redux';
import popularKeywordsReducer from './popular-keywords-reducer';
import searchResultsReducer from './search-results';
import landingPageBodyReducer from './landing-page-body';
import accordionReducer from './accordion';
import loginReducer from './login';
import linkReducer from './link';
const rootReducer = combineReducers({
  popularKeywords:popularKeywordsReducer,
  searchResults:searchResultsReducer,
  landingPage:landingPageBodyReducer,
  accordion:accordionReducer,
  loginReducer,
  linkReducer
});

export default rootReducer;
