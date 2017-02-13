import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Accordion from './../components/Accordion';

import { fetchSteps } from './../actions/accordion-actions';

const mapStateToProps = (state)=> {
	return {
		steps:state.accordion.steps
	};
 }
const mapDispatchToProps = (dispatch) =>{

	return bindActionCreators({
								fetchSteps
						 	 },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Accordion);