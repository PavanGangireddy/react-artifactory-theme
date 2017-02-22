import React, { Component } from 'react';
import { Footer } from 'react-materialize';
/*Import Styles*/
import './styles/index.scss'
/*Footer Component*/
export default class PageFooter extends Component {
  render() {
    /*let footerLinks
    if(this.props.appLevelConfig){
            footerLinks = <ul>
                                {this.props.appLevelConfig.map((data,index) =>{
                                    return <li><a className="grey-text text-lighten-4 text-styling" href={data.link}>{data.name}</a></li>
                                })}
                          </ul>
    }*/
    return (
      <Footer copyrights="&copy; 2017 App Exchange, All rights reserved"
  links={
    <ul>
      <li><h4>You Need Help</h4></li>
      <li><a className="grey-text text-lighten-4 text-styling" href="#!">Documentation Support</a></li>
      <li><a className="grey-text text-lighten-4 text-styling" href="#!">Registry List/Status</a></li>
      <li><a className="grey-text text-lighten-4 text-styling" href="#!">Code Of Conduct</a></li>
      <li><a className="grey-text text-lighten-4 text-styling" href="#!">Contact Us</a></li>
    </ul>
  }
  className='col-md-12'
>
</Footer>
    );
  }
}
