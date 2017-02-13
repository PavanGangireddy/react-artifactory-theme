import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//components
import SearchResult from '../components/SearchResult';
//actions
import {fetchSearchResults, changeView} from '../actions/search-result-action.js';

const mapStateToProps = (state)=> {
	return {
		searchResult:state.searchResults.results,
		view:state.searchResults.view,
		inprogress:state.searchResults.inprogress
	};
 }
const mapDispatchToProps = (dispatch) =>{

	return bindActionCreators({
								fetchSearchResults,
								changeView
						 	 },dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(SearchResult);