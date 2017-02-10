import React, { Component } from 'react';
import PopularCategories from './../../containers/popular-categories';
import Carousel from './../Carousel';
import PackageCards from './../PackageCards';
import FrequentPackagesContainer from './../../containers/frequent-packages-container';
import './landing-page-body.scss';
export default class LandingPageBody extends Component{
	componentWillMount(){
		this.props.fetchPackageCards();
	}
	render(){
		if(this.props.inprogress){
			return <div className='loader'>Loading...</div>
		}
		else{
			return(
				<div className="clearfix">
					<div className='col-md-2'>
						<PopularCategories />
						<FrequentPackagesContainer />
					</div>
					<div className='col-md-10 landing-page-content'>
						<Carousel />
						<div className='col-md-12'>
							<h3>Most Installed Packages</h3>
						</div>
						<PackageCards data={this.props.cardData}/>
					</div>
				</div>
			)
		}

	}
}
