import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//components
import SearchResult from '../components/SearchResult';
//actions
import {fetchResults, changeView} from '../actions/search-result-action.js';

const mapStateToProps = (state)=> {
	return {
		searchResult:state.searchResults.results,
		view:state.searchResults.view
	};
 }
const mapDispatchToProps = (dispatch) =>{

	return bindActionCreators({
								fetchResults,
								changeView
						 	 },dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(SearchResult);