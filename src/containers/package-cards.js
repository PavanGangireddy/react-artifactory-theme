import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//components
import PackageCards from '../components/PackageCards';
//actions
import { setModuleName } from '../actions/link-actions.js'
const mapDispatchToProps = (dispatch) =>{

	return bindActionCreators({
								setModuleName
						 	 },dispatch);
}
export default connect(null, mapDispatchToProps)(PackageCards);