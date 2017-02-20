import {Details_SUCCESS, Details_FAIL, Set_README} from '../constants/action-types';

import { fetchPackageDetailsData } from './../lib/integration'


export const  fetchPackageDetails = (moduleName) =>{
	return function(dispatch){
		fetchPackageDetailsData(moduleName)
		.then(function (response) {	
		    // Dispatch the success action with the payload
    		dispatch({
		        type: Details_SUCCESS,
		        payload: response.data.details,
        	});
    	}.bind(this))
	  	.catch(function (error) {
	    // Dispatch the error action with error information
		    dispatch({
		        type: Details_FAIL,
		        error: error
		    });
    	});
	};

}

export const setReadme = (readmePath) =>{
	return({
		type: Set_README,
		payload:readmePath
	})
}