import {Steps_SUCCESS, Steps_FAIL} from './../constants/action-types';
export default function accordionReducer(state = {
	steps:{},
	inprogress:true,
	dataError:false
},action){
	switch(action.type){
		case Steps_SUCCESS:
	    return Object.assign({},state,{
	    	inprogress:false,
	    	steps:action.payload
	    });
	  case Steps_FAIL:
	    return Object.assign({},state,{
	    	inprogress:false,
	    	dataError:true,
	    	error:action.error
	    });
	    default:
	    return state;
	}
}