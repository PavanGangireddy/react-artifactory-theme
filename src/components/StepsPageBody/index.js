import React, {Component} from 'react';
/*Import Component*/
import StepsToPublish from './../StepsToPublish';
/*Steps page Body component*/
const StepsPageBody = ()=>(
	<div className='clearfix'>
		<div className='col-md-3'></div>
		<StepsToPublish />
		<div className='col-md-3'></div>
	</div>
)

export default StepsPageBody;
