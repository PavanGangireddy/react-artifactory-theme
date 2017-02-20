import React, { Component } from 'react';

import PackageDescription from './../../containers/package-description';
import DetailsSideBar from './../../containers/details-side-bar';

const DescriptionPageBody=()=>(
	<div className='clearfix'>
		<div className='col-md-2'></div>
		<PackageDescription />
		<DetailsSideBar/>
	</div>
)
export default DescriptionPageBody;

