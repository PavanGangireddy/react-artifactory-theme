import React, { Component } from 'react';
import {Link} from 'react-router';
import './search-result-list.scss';
const logo = require('./iea-logo.jpg');
export default class SearchResult extends Component{
	getResults(){
		if(this.props.data){
			return (this.props.data.map((data,index)=>{
					if(data.icon === '' || data.icon === undefined){
						data.icon = logo;
					}
					return (<li className='result-list' key = {index}>
								<div className='search-logo-container'>
									<img src={data.icon} className='search-package-logo' alt='package logo'/>
								</div>
								<h3 className='search-result-title'>
									<Link to='/details' className='title'>{data.title}</Link>
									<a className='search-publisher'> {data.publisher}</a>
								</h3>
								<p className='result-description'>{data.description}</p>
								<span className='result-version'>v{data.version}</span>
							</li>
					);
				})
			);
		}
		else{
			return (<div></div>)
		}	
	}
	render(){
		let results = this.getResults();
		return(
			<ul className='results'>
				{results}
			</ul>
		);
	}
}