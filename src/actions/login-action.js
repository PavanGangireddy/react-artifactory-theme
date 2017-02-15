import { DATA_VALIDATED, VALID_USER_ID, VALID_PASSWORD, RESET} from '../constants/action-types';
export const dataValidated = (errorfree) =>{
	return {
		type: DATA_VALIDATED,
		errorfree:errorfree	
	};
}

export const validUserId = (validUserData,userIdData) =>{
	return{
		type: VALID_USER_ID,
		validUserData:validUserData,
		userIdData:userIdData
	};
}

export const validPassword = (validPassData,passwordData) =>{
	return{
		type: VALID_PASSWORD,
		validPassData:validPassData,
		passwordData:passwordData
	};
}

export const resetState = () =>{
	return {
		type: RESET
	};
}