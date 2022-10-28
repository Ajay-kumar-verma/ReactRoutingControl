import {useNavigation,
    useLocation,useSearchParams,
    useParams,
    NavLink,Route,Routes,
    } from 'react-router-dom'
    
import { useSelector } from 'react-redux';
import Student from './Student';
import Teacher from './Teacher';
import Parent from './Parent';
import L1user from './L1user';
import L2user from './L2user';
import L3user from './L3user';
import Nuser from './Nuser';
import User from './User';
    
    
  export default  _=> {
   const {userType} = useSelector(({user}) =>user);
      if(userType=='student') return  <Student />
      else if(userType=='teacher') return <Teacher />
      else if(userType=='parent') return <Parent />
      else if(userType=='l1user') return <L1user />
      else if(userType=='l2user') return <L2user />
      else if(userType=='l3user') return <L3user />
      else if(userType=='nuser') return <Nuser />
      else if(userType=='user') return <User />
      else  return "User type not found or invalid " 
    }
     
    