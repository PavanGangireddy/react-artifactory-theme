import React, { Component } from 'react';
import {Link} from 'react-router';
import { Card,CardTitle,Row } from 'react-materialize';
import './package-cards.scss';
const logo = require('./iea-logo.jpg');
export default class PackageCards extends Component{

	generateCards(){
		return(
			this.props.data.map((detail,index)=>{
					if(detail.icon === ''|| detail.icon === undefined){
						detail.icon = logo;
					}
					return (<Link to='/details' key={index}><Card header={<CardTitle image={detail.icon} waves='light'/>}
				    title={detail.title}>
				    <p>{detail.publisher}</p>
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