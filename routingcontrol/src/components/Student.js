import {Routes ,Route} from 'react-router-dom'
import {navLists} from '../container/navbar/navbar';

import  Home from '../pages/afterLogin/Home'
import  Address from '../pages/afterLogin/Address'
import  Setting from '../pages/afterLogin/Setting'
import  AccountType from '../pages/afterLogin/AccountType'
import  Detail from '../pages/afterLogin/detail/Student'

export default _=> {
    const pathComp = (path,component) =>({path,component});

  const lst = [
  pathComp("Home",<Home />),
  pathComp("Address",<Address />),
  pathComp("AccountType",<AccountType />),
  pathComp("Detail",<Detail />),
  pathComp("Setting",<Setting />),
  
 ]
    
const links =  navLists(lst.map(({path}) =>path));
console.log("User component is loaded ")
return (<>
 <div>
 {links.map(e =>e)}
 </div>
  <Routes>
  {lst.map(({path,component}) => <Route path={path} element={component} />)}
 </Routes>
</>)
} 

