import { connect } from 'react-redux';

//components
import PopularKeywords from '../components/PopularKeywords';


const mapStateToProps = (state)=> {
	return {
		popularKeywords:state.popularKeywords.details.frequentlySearched
	};
 }

export default connect(mapStateToProps)(PopularKeywords);
