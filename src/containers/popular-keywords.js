import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//components
import PopularKeywords from '../components/PopularKeywords';
import {setKeyword} from '../actions/search-result-action.js';

const mapStateToProps = (state)=> {
	return {
		popularKeywords:state.popularKeywords.details.frequentlySearched
	};
 }

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      setKeyword
    },dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(PopularKeywords);
