import React, { Component } from 'react';
import {Link} from 'react-router';
import { Card,CardTitle,Row } from 'react-materialize';
import './package-cards.scss';
export default class PackageCards extends Component{

	generateCards(){
		return(
			this.props.data.map((detail,index)=>{
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