import React, { PropTypes } from 'react';
/* Importing styles */
import './styles.scss';

/*  Importing components */
import Logo from '../Logo';
import Input from '../Input';
import LoginButton from '../LoginButton';

const logo = require('./logo.png');

/* Container for login form */
export default class LoginContainer extends React.Component {

    render() {
        const {
            validUserData,
            validPassData,
            passwordData,
            userIdData,
            errorfree,
            actions
        } = this.props;

        const propData = {
            text: 'text',
            password: 'password',
            phn: 'Login ID',
            phpw: 'Password',
            title1: 'project ',
            title2: 'Tracker',
            icon1: 'fa fa-user',
            icon2: 'fa fa-lock',
            nid: 'nt-id',
            npassword: 'nt-password',
            inputClass: 'user-id',
            passwordClass: 'password'
        };

        return (
            <div className="login-container">
                <Logo />
                <form>
                    <Input class={propData.inputClass}
                        data={propData.text}
                        ph={propData.phn}
                        icon={propData.icon1}
                        id={propData.nid}
                        validUserData = {validUserData}
                        userIdData = {userIdData}
                        actions ={actions}
                        passwordData = {passwordData}
                        validPassData = {validPassData}
                        tabIndex={2} />

                    <Input class={propData.passwordClass}
                        data={propData.password}
                        ph={propData.phpw}
                        icon={propData.icon2}
                        id={propData.npassword}
                        validPassData = {validPassData}
                        passwordData = {passwordData}
                        actions ={actions}
                        userIdData = {userIdData}
                        validUserData = {validUserData} 
                        tabIndex={3} />

                    <LoginButton errorfree={errorfree}
                        userIdData={userIdData}
                        passwordData={passwordData}
                        actions ={actions} />
                </form>
            </div>
        );
    }
}

LoginContainer.propTypes = {
    validUserData: PropTypes.bool,
    validPassData: PropTypes.bool,
    passwordData: PropTypes.string,
    userIdData: PropTypes.string,
    errorfree: PropTypes.bool.isRequired,
    actions: PropTypes.object.isRequired
};