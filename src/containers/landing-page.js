import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//components
import LandingPage from '../components/LandingPage';
//actions
import {fetchLandingPopularData} from '../actions/landing-page-body-actions';

const mapStateToProps = (state)=> {
	return {
		inprogress:state.popularKeywords.inprogress
	};
 }
const mapDispatchToProps = (dispatch) =>{

	return bindActionCreators({
								fetchLandingPopularData
						 	 },dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(LandingPage);