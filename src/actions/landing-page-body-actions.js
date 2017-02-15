import axios from 'axios';
import {Card_SUCCESS, Card_FAIL, Request_FULFILLED_FREQ, Request_REJECTED_FREQ} from './../constants/action-types';
import { fetchCardsData, fetchPopularData } from './integration';
export const fetchPackageCards = () =>{
	return function(dispatch){
		fetchCardsData()
		.then(function (response) {	
		    // Dispatch the success action with the payload
    		dispatch({
		        type: Card_SUCCESS,
		        payload: response.data.featuredPackages,
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

export const fetchLandingPopularData = () =>{
		//AJAX call to fetch project list data
	return function(dispatch){
		fetchPopularData()
		.then(function (response) {	
		    // Dispatch the success action with the payload
    		dispatch({
		        type: Request_FULFILLED_FREQ,
		        payload: response.data,
        	});
    	}.bind(this))
	  	.catch(function (error) {
	    // Dispatch the error action with error information
		    dispatch({
		        type: Request_REJECTED_FREQ,
		        error: error
		    });
    	});
	};


}