import axios from 'axios';
import {Card_SUCCESS, Card_FAIL} from './../constants/action-types'
export function fetchPackageCards(){
		//AJAX call to fetch project list data
	return function(dispatch){
		axios.get('https://api.myjson.com/bins/m9d39')
		.then(function (response) {	
		    // Dispatch the success action with the payload
    		dispatch({
		        type: Card_SUCCESS,
		        payload: response.data.packageCards,
        	});
    	}.bind(this))
	  	.catch(function (error) {
	    // Dispatch the error action with error information
		    dispatch({
		        type: Card_FAIL,
		        error: error
		    });
    	});
	};
}