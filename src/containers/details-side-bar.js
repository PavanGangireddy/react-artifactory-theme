import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//components
import DetailsSideBar from './../components/DetailsSideBar';
import {fetchPackageDetails, setReadme, resetData} from './../actions/details-side-bar-actions';

const mapStateToProps = (state)=> {
	return {
		inprogress:state.packageDetails.descInprogress,
		packageDetails:state.packageDetails.details,
		moduleName:state.linkReducer.moduleName
	};
 }

const mapDispatchToProps = (dispatch) =>{

	return bindActionCreators({
								fetchPackageDetails,
								setReadme,
								resetData
						 	 },dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(DetailsSideBar);