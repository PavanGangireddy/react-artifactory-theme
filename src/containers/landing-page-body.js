import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LandingPageBody from './../components/LandingPageBody'
import {fetchPackageCards} from './../actions/landing-page-body-actions'

const mapStateToProps = (state)=> {
	return {
		cardData:state.landingPage.cardData,
		inprogress:state.landingPage.inprogress
	};
 }
const mapDispatchToProps = (dispatch) =>{

	return bindActionCreators({
								fetchPackageCards,
						 	 },dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(LandingPageBody);