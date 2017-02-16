import React, { Component } from 'react';

import './styles/index.scss';

var userName, avatar = require('./assets/default.png');
export default class SearchBar extends Component{
	render(){
		if(this.props.user){
			userName = this.props.user.name;
			avatar = this.props.user.avatar;
		}
		else{
			userName = 'sign up or log in';
		}
		return(
			<div className = 'user-details'>
				<span className = 'user-name'>{userName}</span>
				<img src = {avatar} className = 'avatar'/>
			</div>
		)
	}
}