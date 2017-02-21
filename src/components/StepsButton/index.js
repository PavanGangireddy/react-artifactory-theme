import React, { Component } from 'react';
import {Link} from 'react-router';
import { Button, Icon } from 'react-materialize';
/*Import Styles*/
import './styles/index.scss';

const StepsButton = ()=>(
	<Link to='/steps-to-publish'>
		<Button className='steps-button' waves='light'>HELP<Icon left>info</Icon></Button>
	</Link>
)

export default StepsButton;