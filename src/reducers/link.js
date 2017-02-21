import { Set_MODULE } from './../constants/action-types';

export default function linkReducer(state={ moduleName:''}, action){
	switch(action.type){
		case Set_MODULE:
			return Object.assign({},state,{moduleName:action.payload});            
		default: return state;

	}
	return state;
}