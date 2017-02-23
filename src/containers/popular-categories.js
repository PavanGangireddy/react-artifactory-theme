import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import PopularCategories from './../components/PopularCategories';
import {setKeyword} from '../actions/search-result-actions';
import {fetchLandingPopularData} from './../actions/landing-page-body-actions'
const mapStateToProps = (state)=> {
    return{
       popularCategories:state.popularKeywords.details.popularCategories,
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      setKeyword,
      fetchLandingPopularData
    },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(PopularCategories);