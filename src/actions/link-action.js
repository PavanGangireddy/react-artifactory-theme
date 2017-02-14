import { Set_MODULE } from './../constants/action-types';

export function setModuleName(moduleName){
	return({
		type: Set_MODULE,
		payload:moduleName
	})
}