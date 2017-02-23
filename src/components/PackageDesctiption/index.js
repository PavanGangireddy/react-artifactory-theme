import React,{Component} from 'react';
import MarkdownIt  from 'markdown-it';
/*Import Styles*/
import './styles/index.scss';

/*Create an instance of Markdown*/
let md = new MarkdownIt();
/*Package Description Component for the readme of the package*/
export default class PackageDesctiption extends Component{
	componentWillReceiveProps(nextProps){
		if(nextProps.readMePath !== "" && this.props.readMePath !== nextProps.readMePath && this.props.readMePath !== "N/A"){
			nextProps.fetchReadMe(nextProps.readMePath);
		}
	}
	render(){
		let result = '';
		if(Object.getOwnPropertyNames(this.props.packageDetails).length>0){
			if(this.props.data!=null && Object.getOwnPropertyNames(this.props.data).length>0){
				result = md.render(this.props.data);
			}
		}
		else{
			if(!this.props.inprogress){
				result ="<div class='loader'>No Data</div>";
			}
			else{
				result ="<div class='loader'>Loading...</div>";
			}
			
		}

		return(
			<section className='col-md-6 package-description' dangerouslySetInnerHTML={{ __html: result }}>
			</section>)
	}
}