import { Result_SUCCESS, Result_FAIL,Search_SUCCESS,Search_FAIL, Handle_FOCUS,Update_INPUT_VALUE,Details_SUCCESS,Details_FAIL,Description_FAIL,Description_SUCCESS, Change_VIEW, Set_KEY} from '../constants/action-types';

export default function searchResultsReducer(state = {
	results:[],
	inprogress:true,
	dataError:false,
	searchResults:[],
	view:0,
	keyword:''
}, action) {
  switch (action.type) {
	  	case Result_SUCCESS:
	    return Object.assign({},state,{
	    	inprogress:false,
	    	results:action.payload
	    });
	  	case Result_FAIL:
	    return Object.assign({},state,{
	    	inprogress:false,
	    	dataError:true,
	    	error:action.error
	    });
	    case Search_SUCCESS:
	    return Object.assign({},state,{
	    	searchInprogress:false,
	    	searchResults:action.payload
	    });
	    case Search_FAIL:
	    return Object.assign({},state,{
	    	searchInprogress:false,
	    	dataError:true,
	    	error:action.error
	    });
	    case Change_VIEW:
    	return Object.assign({},state,{
    		view:action.payload	
    	});
    	case Set_KEY:
    	return Object.assign({},state,{
    		keyword:action.payload	
    	});
	  default:
	    return state;
  }
}