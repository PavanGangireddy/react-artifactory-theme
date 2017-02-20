import { Result_SUCCESS, Result_FAIL, Search_SUCCESS, Search_FAIL, Details_SUCCESS, Details_FAIL, Description_SUCCESS, Description_FAIL, Change_VIEW, Set_KEY} from '../constants/action-types';

import { fetchSearchResultsData , fetchPackageDetailsData, fetchPackageReadMe} from './../lib/integration'

export const fetchSearchResults = (keyword) =>{
	return function(dispatch){
		fetchSearchResultsData(keyword)
		.then(function (response) {	
		    // Dispatch the success action with the payload
    		dispatch({
		        type: Result_SUCCESS,
		        payload: response.data,
        	});
    	}.bind(this))
	  	.catch(function (error) {
	    // Dispatch the error action with error information
		    dispatch({
		        type: Result_FAIL,
		        error: error
		    });
    	});
	};


}

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

export const fetchReadMe = (moduleName) =>{
	return function(dispatch){
		fetchPackageReadMe(moduleName)
		.then(function (response) {	
		    // Dispatch the success action with the payload
    		dispatch({
		        type: Description_SUCCESS,
		        payload: response.data,
        	});
    	}.bind(this))
	  	.catch(function (error) {
	    // Dispatch the error action with error information
		    dispatch({
		        type: Description_FAIL,
		        error: error
		    });
    	});
	};
}

export const changeView = (value) =>{
	return({
		type: Change_VIEW,
		payload:value
	})
}

export const setKeyword = (keyword) =>{
	return({
		type: Set_KEY,
		payload:keyword
	})
}