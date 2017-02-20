import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//components
import DetailsSideBar from './../components/DetailsSideBar';
import {fetchPackageDetails, setReadme} from './../actions/details-side-bar-actions';

const mapStateToProps = (state,ownprops)=> {
	return {
		inprogress:state.packageDetails.detailsInprogress,
		packageDetails:state.packageDetails.details,
		moduleName:state.linkReducer.moduleName,
		module:ownprops.params.query
	};
 }

const mapDispatchToProps = (dispatch) =>{

	return bindActionCreators({
								fetchPackageDetails,
								setReadme
						 	 },dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(DetailsSideBar);