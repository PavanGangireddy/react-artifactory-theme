import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//components
import SearchResult from '../components/SearchResult';
//actions
import {fetchSearchResults, changeView} from '../actions/search-result-action.js';
import { setModuleName } from '../actions/link-action.js'
const mapStateToProps = (state,ownprops)=> {
	console.log(ownprops);
	return {
		searchResult:state.searchResults.results,
		view:state.searchResults.view,
		inprogress:state.searchResults.inprogress,
		keyword:state.searchResults.keyword,
		query:ownprops.params.query
	};
 }
const mapDispatchToProps = (dispatch) =>{

	return bindActionCreators({
								fetchSearchResults,
								changeView,
								setModuleName
						 	 },dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(SearchResult);