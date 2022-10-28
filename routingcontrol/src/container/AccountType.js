import {useRef} from 'react';
import {useDispatch} from 'react-redux'
import {user,login} from '../rtk/actions/index'
export default _=>{
  const dispatch =useDispatch();

const chnageAccocuntType =(userType) =>{
    dispatch(user.userInfo({userType:userType}))
  }

const logout = () => dispatch(login.login({login:false}))

console.log("AccountType component is loaded")
return (<>

<div>
  <div>Accout Type</div>  
  <button onClick={()=>{chnageAccocuntType("student")}}>student</button>
  <button onClick={()=>{chnageAccocuntType("teacher")}} >teacher</button>
  <button onClick={()=>{chnageAccocuntType("parent")}} >parent</button>
  <button onClick={()=>{chnageAccocuntType("l1user")}} >L1 user</button>
  <button onClick={()=>{chnageAccocuntType("l2user")}} >L2 user</button>
  <button onClick={()=>{chnageAccocuntType("l3user")}} >L3 user</button>
  <button onClick={()=>{chnageAccocuntType("nuser")}} >N user</button>
  <button onClick={()=>{chnageAccocuntType("user")}} > user</button>
  <button onClick={()=>{logout()}} >logout</button>
</div>


</>)
 

}
