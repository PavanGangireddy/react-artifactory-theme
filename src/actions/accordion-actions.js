import { Steps_SUCCESS, Steps_FAIL} from './../constants/action-types';

import { fetchStepsToPublish } from './../lib/integration';

export const fetchSteps = () =>{
	return function(dispatch){
		fetchStepsToPublish()
		.then(function (response) {	
		    // Dispatch the success action with the payload
    		dispatch({
		        type: Steps_SUCCESS,
		        payload: response.data,
        	});
    	}.bind(this))
	  	.catch(function (error) {
	    // Dispatch the error action with error information
		    dispatch({
		        type: Steps_FAIL,
		        error: error
		    });
    	});
	};
}