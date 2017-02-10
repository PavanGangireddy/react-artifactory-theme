import React, { Component } from 'react';
import {Link} from 'react-router';
import './logo.scss';
export default class Logo extends Component{
	render(){
		return(
		<div className = 'logo'>
			<Link to='/'><img src='src/components/Logo/logo.png' alt='' className='logo-img'/></Link>
		</div>
		)
	}
}