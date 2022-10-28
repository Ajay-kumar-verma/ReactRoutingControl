import { useSelector } from 'react-redux';

import BeforeLogin from './components/BeforeLogin';
import AfterLogin from './components/AfterLogin';

function App() {
console.log("App component ia loaded ");
  const {login} = useSelector(({login}) =>login);
 
  if(login) return  <AfterLogin /> 
  else return <BeforeLogin />
  
}

export default App;
