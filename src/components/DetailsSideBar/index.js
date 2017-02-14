import React, { Component } from 'react';
import {Link} from 'react-router';
import { Table } from 'react-materialize';
import './details-side-bar.scss';
export default class DetailsSideBar extends Component{
	componentWillMount(){
		this.props.fetchPackageDetails(this.props.moduleName);
	}
	render(){
		let publisher = this.props.packageDetails.publisher;
		let lastModifiedOn = this.props.packageDetails.lastModifiedOn;
		let version = this.props.packageDetails.version
		let repoLink = this.props.packageDetails.scm;
		if(this.props.inprogress){
			return <div className='loader'>Loading...</div>
		}
		else{

			let contributors = this.props.packageDetails.collaborators;
			contributors = typeof(contributors)  === "object" ? contributors : [contributors]; 
			return(
			<aside className='col-md-4 package-details-side'>
				<ul className='details-list'>
					<li>Publisher : {publisher}</li>
					<li>Current Version : {version}</li>
					<li>Last Modified On : {lastModifiedOn}</li>
					<li className='github-repo-link'><a target="_blank" href={repoLink}>{this.props.packageDetails.github}</a></li>
					<li>{this.props.packageDetails.license}</li>
				</ul>
				<div className='details'>
					<h4>Collaborators:</h4>

					{contributors.map((src,index)=>{
						return(
						<figure key={index} className = 'details-logo-container'>
							<img className = 'publisher-logo' src={src} alt ={this.props.packageDetails.publisher}/>
						</figure>
						)
					})}
				</div>
			</aside>
		)
		}
		
	}
}