import React from 'react';
import './logo.scss';

const logo = require('./logo.png');

const Logo=()=>(
	<div className = 'logo'>
			<img src={logo} alt='' className='logo-img'/>
		</div>
)
export default Logo;
