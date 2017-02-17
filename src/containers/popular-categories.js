import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import PopularCategories from './../components/PopularCategories';
import {setKeyword} from '../actions/search-result-action.js';
const mapStateToProps = (state)=> {
    return{
       popularCategories:state.popularKeywords.details.popularCategories,
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      setKeyword
    },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(PopularCategories);