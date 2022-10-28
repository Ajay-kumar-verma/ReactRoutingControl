import {Routes ,Route} from 'react-router-dom'
import {navLists} from '../container/navbar/navbar';

const Login =() => (<>Login</>);
const SignUp =() => (<>Logout</>);
const ContackForm =() => (<>ContackForm</>);
const Logout = () => (<>Logout</>);

export default _=> {
    const pathComp = (path,component) =>({path,component});

  const lst = [
  pathComp("Home",<Login />),
  pathComp("Logout",<Logout />),
  pathComp("Setting",<SignUp />),
  pathComp("Address",<ContackForm />),
  pathComp("Details",<ContackForm />),
  pathComp("SeeTWE",<ContackForm />),
  pathComp("SeeTWS ",<ContackForm />),
  pathComp("SeeTWT",<ContackForm />),
  pathComp("SeeTWP",<ContackForm />),
    ]

const links =  navLists(lst.map(({path}) =>path));

return (<>
 <div>{links.map(e =>e)}
 </div>
 
  <Routes>
  {lst.map(({path,component}) => <Route path={path} element={component} />)}
 </Routes>
 

</>)

} 

