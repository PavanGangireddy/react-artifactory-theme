//http://delvmpwappexch.sapient.com/artifactory/content/data/tags.json

import axios from 'axios';

var Artifactory = require('./api-stubs').artifactory;

var artApis = new Artifactory();

export function getData(url){
		return axios.get(url)
		.then(function (response) {
    		return response;
    	})
	  	.catch(function (error) {
		    return error;
    	});
}

export function fetchStepsToPublish(){
	let url = 'https://api.myjson.com/bins/pywyl';
	return getData(url);
};

export function fetchCardsData(){
	let url = '/artifactory/content/data/featured.json';
	return getData(url);
}

export function fetchSearchResultsData(){
	let url = 'https://api.myjson.com/bins/k47b9';
	return getData(url);
}

export function fetchPopularData(){
	let url = '/artifactory/content/data/tags.json';
	return getData(url);
}

export function fetchPackageDetailsData(){
	let url = 'https://api.myjson.com/bins/vu825';
	return fetchCall(url);
}

export function fetchPackageReadMe(){
	let url = 'http://delvmpwappexch.sapient.com/artifactory/npm-local/elevator/-/elevator-1.0.0.tgz%21/package/README.md';
	return fetchCall(url);
}
