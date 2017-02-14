//http://delvmpwappexch.sapient.com/artifactory/content/data/tags.json

var axios = require('axios');

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

export function fetchSearchResultsData(keyword){
	let url = '/artifactory/api/plugins/execute/searchbykeyword?params=keyword='+keyword;
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

export function validateActiveSession() {
	return artApis.getAuthCurrent()
	.then(function(result){

	  if(result.body.name === 'anonymous') {
	    console.log('false');
	    return false;
	  } else {
	    console.log('true');
	    return true;
	  }
	}).catch(function (error) {
	  console.log(error);
	  return false;
	});
}

export function login(user,password) {
	return artApis.postAuthLogin({
		'body': {
			'user':user,
			'password':password
		}
	})
	.then(function(result){
		return {};

	}).catch(function (error) {
	  return error;
	});
}
