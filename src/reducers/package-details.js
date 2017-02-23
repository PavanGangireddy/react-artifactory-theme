import {Details_SUCCESS,Details_FAIL,Description_FAIL,Description_SUCCESS, Reset_DATA} from '../constants/action-types';

export default function packageDetailsReducer(state = {
	details:{},
	descInprogress:true,
	descriptionData:{}
}, action) {
  switch (action.type) {
		case Details_SUCCESS:
	    return Object.assign({},state,{
	    	descInprogress:false,
	    	details:action.payload
	    });
	    case Details_FAIL:
	    return Object.assign({},state,{
	    	descInprogress:false,
	    	dataError:true,
	    	error:action.error
	    });
	     case Description_SUCCESS:
	    return Object.assign({},state,{
	    	descInprogress:false,
	    	descriptionData:action.payload
	    });
	    case Description_FAIL:
	    return Object.assign({},state,{
	    	descInprogress:false,
	    	dataError:true,
	    	error:action.error
	    });
	    case Reset_DATA:
	    return Object.assign({},state,{
	    	details:action.payload,
	    	descriptionData:action.payload
	    });
	    default:
	    return state;
  }
}