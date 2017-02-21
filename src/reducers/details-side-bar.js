import {Set_README} from './../constants/action-types';

export default function detailsSideBarReducer(state = {
	readMePath:'',
	inprogress:true,
	dataError:false
},action){
	switch(action.type){
		case Set_README:
	    return Object.assign({},state,{
	    	inprogress:false,
	    	readMePath:action.payload
	    });
	    default:
	    return state;
	}
}