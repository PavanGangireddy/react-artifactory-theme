import React from 'react';
import {Link} from 'react-router';
import './logo.scss';

const logo = require('./logo.png');

const Logo=()=>(
	<div className = 'logo'>
			<Link to='/'><img src={logo} alt='' className='logo-img'/></Link>
		</div>
)
export default Logo;
