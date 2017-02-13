import { getData } from './api-stubs';
const fetchCall = url => {
	return getData(url)
		.then(function (response) {	
    		return response;
    	})
	  	.catch(function (error) {
		    return error;
    })
}
export function fetchStepsToPublish(){
	let url = 'https://api.myjson.com/bins/pywyl';
	return fetchCall(url);	
};

export function fetchCardsData(){
	let url = 'https://api.myjson.com/bins/m9d39';
	return fetchCall(url);
}

export function fetchSearchResultsData(){
	let url = 'https://api.myjson.com/bins/k47b9';
	return fetchCall(url);
}

export function fetchPopularData(){
	let url = 'https://api.myjson.com/bins/10sj9t';
	return fetchCall(url);
}

export function fetchPackageDetailsData(){
	let url = 'https://api.myjson.com/bins/vu825';
	return fetchCall(url);
}

export function fetchPackageReadMe(){
	let url = 'http://delvmpwappexch.sapient.com/artifactory/npm-local/elevator/-/elevator-1.0.0.tgz%21/package/README.md';
	return fetchCall(url);
}
