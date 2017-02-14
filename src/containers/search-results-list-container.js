import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//components
import SearchResultList from '../components/SearchResultList';
//actions
import { setModuleName } from '../actions/link-action.js'
const mapDispatchToProps = (dispatch) =>{

	return bindActionCreators({
								setModuleName
						 	 },dispatch);
}
export default connect(mapDispatchToProps)(SearchResultList);