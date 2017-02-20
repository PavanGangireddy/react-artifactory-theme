import React, { Component } from 'react';

import Header from './../Header';
import PageFooter from './../PageFooter';

import PopularCategories from './../../containers/popular-categories';

export default class LandingPage extends Component{
	componentWillMount(){
		this.props.fetchLandingPopularData();
	}
	render(){
		if(this.props.inprogress){
			return <div className='loader'>Loading...</div>
		}
		else{
			return(
				<div>
					<Header />
					{this.props.children}
					<PageFooter />
				</div>
			)
		}

	}
}
