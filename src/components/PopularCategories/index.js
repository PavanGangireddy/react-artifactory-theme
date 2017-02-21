import React, { Component } from 'react';
import { browserHistory } from 'react-router';
/*Import Styles*/
import './styles/index.scss'
/*Popular Categories component*/
export default class PopularCategories extends Component{
	/*
	* Function to handle click event and trigger an action
	*/
	selectCategory(e){
		let keyword = e.target.text.toLowerCase();
		this.props.setKeyword(keyword);
		browserHistory.push('/results/keyword='+keyword);
	}
	render(){
		return(
			<section className='col-md-12 popular-categories-container'>
				<ul className='popular-categories'>
					{
						this.props.popularCategories.map((data,index) => {
							return(
								<li className='popular-list' key={ index } onClick = {this.selectCategory.bind(this)}><a>{ data }</a></li>
							);
						})
					}
				</ul>
			</section>
		)
	}
}