import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//components
import SearchResult from '../components/SearchResult';
//actions
import {fetchSearchResults, changeView} from '../actions/search-result-actions';
import { setModuleName } from '../actions/link-actions.js'
const mapStateToProps = (state,ownprops)=> {
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