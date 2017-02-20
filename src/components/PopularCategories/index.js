import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import './styles/index.scss'

export default class PopularCategories extends Component{
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