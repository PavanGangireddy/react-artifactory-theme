import axios from 'axios';

export function getData(url){
		return axios.get(url)
		.then(function (response) {	
    		return response;
    	})
	  	.catch(function (error) {
		    return error;
    	});
}
