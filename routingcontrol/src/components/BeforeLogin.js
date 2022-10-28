import {useRef } from 'react';
import {useDispatch} from 'react-redux'
import {user,login} from '../rtk/actions/index'

export default _=>{
const ref= useRef(null);
  const dispatch =useDispatch();
  const Login =() =>{
    dispatch(login.login({login:true}));
    dispatch(user.userInfo({userType:ref.current.value}))
  return true;
  }
  console.log("Beforelogin component is loaded")
return(<>
 
 <form  onSubmit={Login} >

 <input ref={ref} autoFocus />  <button type="submit" > login</button>
 
 </form>

  </>) 

}