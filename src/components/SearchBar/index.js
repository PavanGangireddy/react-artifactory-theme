import React, { Component } from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';

/*Import Styles*/
import './styles/index.scss';

/*Search Bar Component*/
export default class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.searchInputTitle = null;
    }
    /*
    * Function to trigger search action
    * @param {value} - the keyword eneterd by the user 
    */
    searchFunction(value) {
        let input = this.searchInputTitle.value;
        if(input== null ||input==''){
              input = ' ';  
        }
        this.props.setKeyword(input)
        browserHistory.push('/results/keyword='+input);
        
    }
    /*
    * Function to handle enter key on the search bar
    */
    handleKeyDown(e, value) {
        let numOptions = this.props.searchResults.length;

        if(e.keyCode === 13) {
            this.searchFunction();
        }
    }
    render() {
        return ( 
            <div className = 'search-bar'>
                <input className = 'search-input' placeholder = 'Search' ref = { (el) => { this.searchInputTitle = el; } } defaultValue={this.props.query} onKeyDown = { this.handleKeyDown.bind(this) } /> 
                <span className = 'search-icon fa fa-search' onClick = { this.searchFunction.bind(this) }> < /span> 
            </div>
        )
    }
}