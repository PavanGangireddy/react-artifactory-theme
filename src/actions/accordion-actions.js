import axios from 'axios';
import { Steps_SUCCESS, Steps_FAIL} from './../constants/action-types';

export function fetchSteps(){
	return function(dispatch){
		let url = 'https://api.myjson.com/bins/pywyl';	
		axios.get(url)
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