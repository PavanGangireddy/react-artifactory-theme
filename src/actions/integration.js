//http://delvmpwappexch.sapient.com/artifactory/content/data/tags.json

var axios = require('axios');

var Artifactory = require('./api-stubs').artifactory;

var artApis = new Artifactory();

export const getData = (url) =>{
		return axios.get(url)
		.then(function (response) {
    		return response;
    	})
	  	.catch(function (error) {
		    return error;
    	});
}

export const fetchStepsToPublish = () =>{
	let url = 'https://api.myjson.com/bins/pywyl';
	return getData(url);
};

export const fetchCardsData = () =>{
	let url = '/artifactory/content/data/featured.json';
	return getData(url);
}

export const fetchSearchResultsData = (keyword) =>{
	let url = '/artifactory/api/plugins/execute/searchbykeyword?params=keyword='+keyword;
	return getData(url);
	/*if(keyword.toLowerCase() == 'sample'){
		let url = 'https://api.myjson.com/bins/1df3jp';
		return getData(url);
	}
	else{
		return getData('https://api.myjson.com/bins/1cgsz9');
	}*/
	
}

export const fetchPopularData = () =>{
	let url = '/artifactory/content/data/tags.json';
	return getData(url);
}

export const fetchPackageDetailsData = (moduleName) =>{
	let url = '/artifactory/api/plugins/execute/moduledetails?params=module='+moduleName;
	// let url = 'https://api.myjson.com/bins/1bn52t';
	return getData(url);
}

export const fetchPackageReadMe = () =>{
	let url = '/artifactory/npm-local/elevator/-/elevator-1.0.0.tgz%21/package/README.md';
	return getData(url);
}

export const validateActiveSession = () =>{
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

export const login = (user,password)=>{
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
