import React, { Component } from 'react';
import {Link} from 'react-router';
import './styles/index.scss';
const logo = require('./assets/iea-logo.jpg');
export default class SearchResult extends Component{
	setModule(moduleName){
		this.props.setModuleName(moduleName);
	}
	getResults(){
		let moduleName='';
		if(this.props.data){
			return (this.props.data.map((data,index)=>{
					if(data.icon === '' || data.icon === undefined){
						data.icon = logo;
					}
					moduleName = data.name;
					return (<li className='result-list' key = {index}>
								<div className='search-logo-container'>
									<img src={data.image} className='search-package-logo' alt='package logo'/>
								</div>
								<h3 className='search-result-title'>
									<Link to={'/module/'+moduleName} className='title' onClick={this.setModule.bind(this,moduleName)}>{data.name}</Link>
								</h3>
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