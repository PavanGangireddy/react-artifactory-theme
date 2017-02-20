import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchBar from './../components/SearchBar';

import { searchSuggestion,selectedSearch,updateSearchValue,handleDownArrow } from './../actions/search-suggestion-actions';
import {fetchSearchSuggestions} from './../actions/search-result-actions'
import {fetchSearchResults, setKeyword} from '../actions/search-result-actions';
const mapStateToProps = (state)=>  {
    return{
       enable:state.popularKeywords.enable,
       searchSelected:state.popularKeywords.searchSelected,
       searchResults:state.searchResults.searchResults,
       searchValue:state.popularKeywords.searchValue,
       inprogress:state.searchResults.inprogress,
       activeIndex:state.searchResults.activeIndex,
       defaultInput:state.searchResults.defaultInput,   
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      searchSuggestion:searchSuggestion,
      selectedSearch:selectedSearch,
      updateSearchValue:updateSearchValue,
      fetchSearchSuggestions:fetchSearchSuggestions,
      handleDownArrow:handleDownArrow,
      fetchSearchResults,
      setKeyword
    },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);