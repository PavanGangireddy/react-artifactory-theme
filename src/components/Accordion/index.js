import React, {Component} from 'react';
import './accordion.scss';
export default class Accordion extends Component{
	constructor(props){
		super(props)
		this.state = {
			active : [false,false]
		}
	}
	componentWillMount(){
		this.props.fetchSteps();
	}

	toggle(x){
		if(x===1){
			this.setState({
				active:[!this.state.active[0],false]
			})
		}
		else if(x===2){
			this.setState({
				active:[false,!this.state.active[1]]
			})
		}
		
	}

	render(){
		let codeItem = JSON.stringify(this.props.steps.codeItem, null, 4)

		return(
			<div className='accordion'>
			<section>
				<h3 className='accordion-header' onClick={this.toggle.bind(this,1)}>MVN</h3>
				<div className={'accordion-content '+(this.state.active[0]?'display':'hide')}>
				<p>{this.props.steps.description}</p>
				<pre><code>{codeItem}</code></pre>
				</div>
			</section>
			<section>
				<h3 className='accordion-header' onClick={this.toggle.bind(this,2)}>NPM</h3>
				<div className={'accordion-content '+(this.state.active[1]?'display':'hide')}>
				<p>{this.props.steps.description}</p>
				<pre><code>{codeItem}</code></pre>
				</div>
			</section>
			</div>
		)
	}
}