import React, { Component } from 'react';
import {Link} from 'react-router';
import { Card,CardTitle,Row } from 'react-materialize';
import { browserHistory } from 'react-router';
/*Import Styles*/
import './styles/index.scss';

const logo = require('./assets/iea-logo.jpg');

/*Package Cards Component*/
export default class PackageCards extends Component{
	setModule(moduleName){
		this.props.setModuleName(moduleName);
	}
	/*
	*	Function to generate the Card using the Card from react-materialize
	*/
	generateCards(){
		let moduleName = '',urlParam = '';
		return(
			this.props.data.map((detail,index)=>{
					if(detail.image === ''|| detail.image === undefined){
						detail.image = logo;
					}
					moduleName = detail.name;
					urlParam = detail.name+','+detail.version;
					return (<Link to={'/module/'+urlParam} key={index} onClick={this.setModule.bind(this,moduleName)}><Card className={this.props.className}header={<CardTitle image={detail.image} waves='light'/>}
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