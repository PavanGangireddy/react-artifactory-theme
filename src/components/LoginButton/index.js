import React, {Component} from 'react';
import {browserHistory} from 'react-router';


import {login} from '../../lib/integration';

import './styles/index.scss';

export default class LoginButton extends Component {
	constructor(props){
		super(props);
        // Handle Function
        this.submitForm = this.submitForm.bind(this);
        this.resetStates = this.resetStates.bind(this);
        this.state={showError:false};
    }
    resetStates(){
        this.props.actions.resetState();
    }

    /*
    *  Authentication of user on login Button, setting x-access-token and rerouting to Dashboard.
    *  @params {Object} e - Event triggered on click of Login button.
    */
    submitForm(e) {
        let buttonContext = this;
        e.preventDefault();
        login(this.props.userIdData, this.props.passwordData)
        .then(function (response) {
            if(response && response.body && response.body.error) {
              buttonContext.setState({showError : true});
           }
           else {
              browserHistory.goBack();
           }
       })
       .catch(function (error) {
	        console.log(error, "Call to login failed");
	    });
     
    }
    componentDidMount(){
      this.resetStates();
    }

    render() {
        let errorMessage = this.state.showError;
        return (
            <div className="button-container">
                <span className={errorMessage?'login-error-msg' :'login-error-msg hide'}>Please enter valid credentials</span>
                <button className={this.props.errorfree?'button-enable login-button' :'button-disable login-button'} 
                disabled={!this.props.errorfree} onClick={this.submitForm.bind(this)} tabIndex={4}> LOG IN</button>
            </div>
        );
    }

}

LoginButton.contextTypes = {
   router: React.PropTypes.object.isRequired
};