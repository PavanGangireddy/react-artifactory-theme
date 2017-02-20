import React,{Component} from 'react';
import MarkdownIt  from 'markdown-it';
/*Import Styles*/
import './styles/index.scss';

/*Create an instance of Markdown*/
let md = new MarkdownIt();
/*Package Description Component for the readme of the package*/
export default class PackageDesctiption extends Component{
	componentWillMount(){
		if(this.props.readMePath){
			this.props.fetchReadMe(this.props.readMePath);
		}
	}
	render(){
		let result ="<div class='loader'>Loading...</div>";
		if(!this.props.inprogress){
			if(this.props.data!=null){
				result = md.render(this.props.data);
			}
			else{
				result ="<div class='loader'>No Data</div>";
			}
		}
		
		return(
			<section className='col-md-6 package-description' dangerouslySetInnerHTML={{ __html: result }}>
			</section>)
	}
}