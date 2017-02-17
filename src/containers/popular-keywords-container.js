import { connect } from 'react-redux';

//components
import PopularKeywords from '../components/PopularKeywords';


const mapStateToProps = (state)=> {
	return {
		frequent:state.frqPackages.details.frequentlySearched
	};
 }

export default connect(mapStateToProps)(PopularKeywords);
