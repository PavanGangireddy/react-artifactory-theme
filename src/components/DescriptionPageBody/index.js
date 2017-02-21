import React, { Component } from 'react';

/*Containers to be imported*/
import PackageDescription from './../../containers/package-description';
import DetailsSideBar from './../../containers/details-side-bar';

/*Description Page Container*/
export default class DescriptionPageBody extends Component{
	render(){
		return(
			<div className='clearfix'>
				<div className='col-md-2'></div>
				<PackageDescription />
				<DetailsSideBar query = {this.props.module}/>
			</div>
		)
	}
}

