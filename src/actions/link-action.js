import { Set_MODULE } from './../constants/action-types';

export const setModuleName = (moduleName) =>{
	return({
		type: Set_MODULE,
		payload:moduleName
	})
}