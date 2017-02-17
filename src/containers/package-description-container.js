import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//actions
import {fetchReadMe} from '../actions/search-result-action.js'
//component
import PackageDesctiption from './../components/PackageDesctiption';
const mapStateToProps = (state,ownprops)=> {
	console.log(ownprops);
	return {
		inprogress:state.searchResults.descInprogress,
		data:state.searchResults.descriptionData,
		moduleName:state.linkReducer.moduleName
	};
 }
const mapDispatchToProps = (dispatch) =>{

	return bindActionCreators({
								fetchReadMe
						 	 },dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(PackageDesctiption);

