import React, { Component } from 'react';

import PackageDetails from './../PackagesDetails';

import './styles/index.scss';

export default class MostIntsalledPackages extends Component{

	packageComponent(){
		return (this.props.details.map((detail,index)=>{
					return (<PackageDetails key = {index} detail={detail}/>);
				})
		);
	}
	render(){
		
			let packages= this.packageComponent();
			return (

						<section className='col-md-12 packages-container'>
							<h1 className='most-installed-header'>Packages people 'install' a lot</h1>
							{packages}
						</section>
				);
		
	}
}