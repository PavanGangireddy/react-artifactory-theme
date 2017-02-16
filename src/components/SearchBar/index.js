import React, { Component } from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import './styles/index.scss';
import debounce from 'lodash.debounce';
import SearchDropDown from './../../containers/search-drop-down-container';
export default class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.searchInputTitle = null;
        /*this.searchFunction = debounce(this.searchFunction.bind(this), 500);*/
    }
    searchFunction(value) {
        let input = this.searchInputTitle.value;
        /*this.props.fetchSearchResults(input);*/
        if(input== null ||input==''){
              input = ' ';  
        }
        this.props.setKeyword(input)
        browserHistory.push('/results/keyword='+input);
        
    }
    onClickOut() {
        this.props.searchSuggestion(false);
    }
    handleKeyDown(e, value) {
        let numOptions = this.props.searchResults.length;

        switch (e.keyCode) {

            /*case 38: // up arrow
                if (this.props.activeIndex > 0) {
                    this.props.handleDownArrow(this.props.activeIndex - 1, this.props.searchResults[this.props.activeIndex].value);
                } else {
                    this.props.handleDownArrow(numOptions - 1, this.props.searchResults[this.props.activeIndex].value);
                }
                break;

            case 40: // down arrow
                let activeIndex = (this.props.activeIndex + 1) % numOptions;
                this.props.handleDownArrow(activeIndex, this.props.searchResults[activeIndex].value);
                break;*/
            case 13:
                this.searchFunction();
                break;
        }
    }
    render() {
        return ( 
            <div className = 'search-bar'>
                <input className = 'search-input' placeholder = 'Search' ref = { (el) => { this.searchInputTitle = el; } } defaultValue={this.props.query}onKeyDown = { this.handleKeyDown.bind(this) } /> 
                <span className = 'search-icon fa fa-search' onClick = { this.searchFunction.bind(this) }> < /span> 
            </div>
        )
    }
}