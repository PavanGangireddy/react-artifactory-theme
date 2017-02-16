import React from 'react';
import {Link} from 'react-router';
import './styles/index.scss';

const logo = require('./assets/logo.png');

const Logo=()=>(
	<div className = 'logo'>
			<Link to='/'><img src={logo} alt='' className='logo-img'/></Link>
		</div>
)
export default Logo;
