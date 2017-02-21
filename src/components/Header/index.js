import React, { Component } from 'react';
import {Link} from 'react-router';

/*Import Components*/
import Logo from './../Logo';
import StepsButton from './../StepsButton';
/*Import Containers*/
import SearchBarContainer from './../../containers/search-bar';
/*Import Styles*/
import './styles/index.scss';

/*Header Component*/
const Header=()=>(
	<div>
		<div className = 'header'>
			<div className='col-md-3'> <Logo /> </div>
			<div className='col-md-7'><SearchBarContainer /> </div>
			<div className='col-md-2'> <StepsButton /></div>	
		</div>
	</div>
)

export default Header;