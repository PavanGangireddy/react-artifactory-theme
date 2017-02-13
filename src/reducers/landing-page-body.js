import { Card_SUCCESS, Card_FAIL } from '../constants/action-types';

export default function landingPageBodyReducer(state = {
	inprogress:true,
	dataError:false,
	cardData:{},
}, action){
	 switch (action.type) {
	  case Card_SUCCESS:
	    return Object.assign({},state,{
	    	inprogress:false,
	    	cardData:action.payload
	    });
	  case Card_FAIL:
	    return Object.assign({},state,{
	    	inprogress:false,
	    	dataError:true,
	    	error:action.error
	    });
	  default:
	    return state;
  }
}