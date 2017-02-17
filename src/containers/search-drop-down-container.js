import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchDropDown from './../components/SearchDropDown';

import { selectedSearch,handleDownArrow } from './../actions/search-suggestion-actions';
import {fetchSearchSuggestions} from './../actions/search-result-action'
const mapStateToProps = (state)=>  {
    return{
       enable:state.popularKeywords.enable,
       searchSelected:state.popularKeywords.searchSelected,
       searchResults:state.searchResults.searchResults,
       searchValue:state.popularKeywords.searchValue,
       inprogress:state.searchResults.SearchInprogress,
       activeIndex:state.searchResults.activeIndex
    };
}

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({
      selectedSearch:selectedSearch,
      handleDownArrow:handleDownArrow
    },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchDropDown);
