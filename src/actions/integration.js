import { stepsAxiosCall } from './axios-caller';
export function fetchStepsToPublish(){
	return stepsAxiosCall()
		.then(function (response) {	
    		return response;
    	})
	  	.catch(function (error) {
		    return error;
    	});	
};