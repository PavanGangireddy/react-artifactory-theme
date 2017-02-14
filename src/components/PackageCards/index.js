import React, { Component } from 'react';
import {Link} from 'react-router';
import { Card,CardTitle,Row } from 'react-materialize';
import './package-cards.scss';
const logo = require('./iea-logo.jpg');
export default class PackageCards extends Component{
	setModule(moduleName){
		this.props.setModuleName(moduleName);
	}
	generateCards(){
		let moduleName = '';
		return(
			this.props.data.map((detail,index)=>{
					if(detail.image === ''|| detail.image === undefined){
						detail.image = logo;
					}
					moduleName = detail.name;
					return (<Link to={'/module/'+moduleName} key={index} onClick={this.setModule.bind(this,moduleName)}><Card header={<CardTitle image={detail.image} waves='light'/>}
				    title={detail.name}>
				    <p>{detail.version}</p>
				</Card></Link>);
			})
		);
	}

	render(){
		let cards = this.generateCards()
		return(
			<div>
			<div className='col-md-12 package-cards'>
				{cards}
			</div>
			</div>
		)
	}
}