import React, { Component } from 'react';
import {Link} from 'react-router';

import PopularCategories from './../../containers/popular-categories';
import PopularKeywords from './../../containers/popular-keywords';
import PackageCards from './../../containers/package-cards';
import SearchResultList from './../../containers/search-results-list';

import './styles/index.scss';

const list = require('./assets/list.png'),
		grid = require('./assets/grid.png');

export default class SearchResult extends Component{
	componentWillMount(){
		this.triggersearch()
	}
	componentDidUpdate(prevState){
		console.log(prevState.keyword,this.props.keyword)
		if(prevState.keyword!=this.props.keyword){
			this.triggersearch()
		}
	}
	triggersearch(){
			let query='';
			if(this.props.keyword){
				query=this.props.keyword
			}
			else{
				query=this.props.query
			}
			this.props.fetchSearchResults(query);
	}
	changeView(value){
		this.props.changeView(value);
	}
	render(){
		if(this.props.inprogress){
			return <div className='loader'>Loading...</div>
		}
		else{
			
				return(
				<div className='clearfix'>
					<div className='col-md-2'>
						<PopularCategories />
						<PopularKeywords />
					</div>
					<div className='col-md-10 search-result'>
						<div className='result-header'>
							<h4>{this.props.searchResult.results.length} PACKAGES FOUND</h4>
							<div>for <b>{this.props.query}</b></div>
						</div>
						<div className='switch-view'>
							<span className='list-view-icon' onClick = {this.changeView.bind(this,0)}><img src={list} /></span>
							<span className='grid-view-icon' onClick = {this.changeView.bind(this,1)}><img src={grid} /></span>
						</div>
							<PackageCards className={this.props.view ? "card" : "list"} data={this.props.searchResult.results}/>
					</div>					
				</div>			
				)
		}
	}
}