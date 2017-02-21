import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
/*  Importing actions */
import * as FormActions from '../actions/login-actions';
/* Importing reducers */
import rootReducer from '../reducers';
/* Importing Login component. */
import Login from '../components/Login';

const mapStateToProps = (state)=> {
    return {
        validUserData: state.loginReducer.validUserData,
        validPassData: state.loginReducer.validPassData,
        passwordData: state.loginReducer.passwordData,
        userIdData: state.loginReducer.userIdData,
        errorfree: state.loginReducer.errorfree
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(FormActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);