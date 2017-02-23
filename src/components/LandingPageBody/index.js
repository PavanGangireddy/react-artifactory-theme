import React, { Component } from 'react';
/*Import Components*/
import Carousel from './../Carousel';
/*Import Containers*/
import PopularCategories from './../../containers/popular-categories';
import PackageCards from './../../containers/package-cards';
import PopularKeywords from './../../containers/popular-keywords';
/*Import Styles*/
import './styles/index.scss';

/*Landing Page Body Component*/
export default class LandingPageBody extends Component{
	componentWillMount(){
		this.props.fetchLandingPopularData();
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
						<PopularKeywords />
					</div>
					<div className='col-md-10 landing-page-content'>
						<Carousel />
						<div className='col-md-12'>
							<h3 className='most-installed-header'>Featured Packages</h3>
						</div>
						<PackageCards data={this.props.cardData}/>
					</div>
				</div>
			)
		}

	}
}
