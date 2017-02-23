import React, { Component } from 'react';
/*Import Components*/
import Header from './../Header';
import PageFooter from './../PageFooter';
/*Import Containers*/
import PopularCategories from './../../containers/popular-categories';

import {validateActiveSession} from './../../lib/integration'

/*Landing Page Container*/
export default class LandingPage extends Component{
	componentWillMount(){
		const result = validateActiveSession();
   		if(result){
        	this.props.fetchLandingPopularData();
    	}
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
