import React, { Component } from 'react';
import {Link} from 'react-router';

import Logo from './../Logo';
import StepsButton from './../StepsButton';

import SearchBarContainer from './../../containers/search-bar';

import './styles/index.scss';

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