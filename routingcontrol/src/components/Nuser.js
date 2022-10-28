import {Routes ,Route} from 'react-router-dom'
import {navLists} from '../container/navbar/navbar';

const Login =() => (<>Login</>);
const SignUp =() => (<>Logout</>);
const ContackForm =() => (<>ContackForm</>);

export default _=> {
    const pathComp = (path,component) =>({path,component});

  const lst = [
  pathComp("Home",<Login />),
  pathComp("Setting",<SignUp />),
  pathComp("Address",<ContackForm />),
  pathComp("Details",<ContackForm />),
  pathComp("SeeTWE",<ContackForm />),
  pathComp("SeeTWS ",<ContackForm />),
  pathComp("SeeTWT",<ContackForm />),
  pathComp("SeeTWP",<ContackForm />),
    ]
    
// lst.map(({path}) => path
// const nav =fun("Ajay kuimar f")

const links =  navLists(lst.map(({path}) =>path));

return (<>

 <div>
 {links.map(e =>e)}
 </div>
 
  <Routes>
  {lst.map(({path,component}) => <Route path={path} element={component} />)}
 </Routes>
 

</>)

} 

