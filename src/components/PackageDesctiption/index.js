import React,{Component} from 'react';
import MarkdownIt  from 'markdown-it';
/*Import Styles*/
import './styles/index.scss';

/*Create an instance of Markdown*/
let md = new MarkdownIt();
/*Package Description Component for the readme of the package*/
export default class PackageDesctiption extends Component{
	componentWillMount(){
		this.props.fetchReadMe(this.props.moduleName);
	}
	render(){
		let result ="<div class='loader'>Loading...</div>";
		if(this.props.data!=null){
			result = md.render(this.props.data);
		}
		
		return(
			<section className='col-md-6 package-description' dangerouslySetInnerHTML={{ __html: result }}>
			</section>)
	}
}