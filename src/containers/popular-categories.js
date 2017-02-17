import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import PopularCategories from './../components/PopularCategories'
const mapStateToProps = (state)=> {
    return{
       popularCategories:state.popularKeywords.details.popularCategories,
    };
}



export default connect(mapStateToProps)(PopularCategories);