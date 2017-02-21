import React, { Component } from 'react';
import {Link} from 'react-router';
import { Table } from 'react-materialize';
import moment from 'moment';
/* Importing styles */
import './styles/index.scss';

/*Details Side Bar Components of the Description Page*/
export default class DetailsSideBar extends Component{
	
	componentWillMount(){
		if(this.props.moduleName){
			this.props.fetchPackageDetails(this.props.moduleName)
		}else{
			this.props.fetchPackageDetails(this.props.query);
		}
		
	}
	componentWillReceiveProps (nextProps) {
		if(this.props.packageDetails.readme !== nextProps.packageDetails.readme){
			this.props.setReadme(nextProps.packageDetails.readme);
		}
	}

	componentWillUnmount(){
		this.props.resetData()
	}
	render(){
		 
		let publisher = this.props.packageDetails.publisher;
		let lastModifiedOn = moment(this.props.packageDetails.lastModifiedOn).format('DD-MMM-YYYY');
		let version = this.props.packageDetails.version
		let repoLink = this.props.packageDetails.scm;
		/*check for the data availability*/

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
					<li className='github-repo-link'><a target="_blank" href={repoLink}>{repoLink}</a></li>
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