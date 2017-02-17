import { browserHistory} from 'react-router';
import {validateActiveSession} from './actions/integration'
export const authTransition = () =>{

  const result = validateActiveSession().then(function(result){
    if(!result){
        browserHistory.push('/login');
    }
  })
};
