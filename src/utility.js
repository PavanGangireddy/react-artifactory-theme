import axios from 'axios';
import { browserHistory} from 'react-router';
export default function getCookie(key) {
    let cookieKey = key + '=';
    let cookieData = document.cookie.split(';');
    for(let i = 0; i < cookieData.length; i++) {
        let c = cookieData[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(cookieKey) == 0) {
            return c.substring(cookieKey.length, c.length);
        }
    }
    return '';
}

export const authTransition = function authTransition() {
	console.log('a');
	// browserHistory.push('landing-page');

    /*const token = getCookie('x-access-token');
   
    axios.post('', null, {headers:{'x-access-token': token}}).then(function (response){
    	if(response.data.isValid){
    		
    	}
    	else{
        	browserHistory.push('/');
    	}
    });*/
};