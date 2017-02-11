import axios from 'axios';

export function stepsAxiosCall(){
	let url = 'https://api.myjson.com/bins/pywyl';	
		return axios.get(url)
		.then(function (response) {	
    		return response;
    	})
	  	.catch(function (error) {
		    return error;
    	});
}
