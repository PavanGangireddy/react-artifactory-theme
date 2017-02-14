import React, { Component } from 'react';
import {Link} from 'react-router';
import './search-results.scss';
import PopularCategories from './../../containers/popular-categories';
import FrequentPackagesContainer from './../../containers/frequent-packages-container';
import PackageCards from './../../containers/package-cards-container';
import SearchResultList from './../../containers/search-results-list-container';
const list = require('./list.png'),
		grid = require('./grid.png');
export default class SearchResult extends Component{
	componentWillMount() {
		this.props.fetchSearchResults();
	}
	getView(){
		if(this.props.view){
			return(<PackageCards data={this.props.searchResult.results}/>);
		}
		else{
			return(<SearchResultList data={this.props.searchResult.results}/>);
		}
	}
	changeView(value){
		this.props.changeView(value);
	}
	render(){
		if(this.props.inprogress){
			return <div className='loader'>Loading...</div>
		}
		else{
			let view=this.getView();
			return(
				<div className='clearfix'>
					<div className='col-md-2'>
						<PopularCategories />
						<FrequentPackagesContainer />
					</div>
					<div className='col-md-10 search-result'>
						<div className='result-header'>
							<h4>{this.props.searchResult.results.length} PACKAGES FOUND</h4>
							<div>for <b>{this.props.keyword}</b></div>
						</div>
						<div className='switch-view'>
							<span className='list-view-icon' onClick = {this.changeView.bind(this,0)}><img src={list} /></span>
							<span className='grid-view-icon' onClick = {this.changeView.bind(this,1)}><img src={grid} /></span>
						</div>
						{view}
					</div>					
				</div>
			)
		}
	}
}