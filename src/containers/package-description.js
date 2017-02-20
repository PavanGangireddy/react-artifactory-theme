import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//actions
import {fetchReadMe} from '../actions/search-result-actions'
//component
import PackageDesctiption from './../components/PackageDesctiption';
const mapStateToProps = (state)=> {
	return {
		inprogress:state.packageDetails.descInprogress,
		data:state.packageDetails.descriptionData,
		moduleName:state.linkReducer.moduleName,
		readMePath:state.detailsSideBar.readMePath
	};
 }
const mapDispatchToProps = (dispatch) =>{

	return bindActionCreators({
								fetchReadMe
						 	 },dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(PackageDesctiption);

