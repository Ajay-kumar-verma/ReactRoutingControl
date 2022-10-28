import { useSelector } from 'react-redux'
import AccountType from '../../container/AccountType'

export default _=> {

return (<>

<UserType />
<AccountType />

</>)


}


const UserType =() =>{
    return (<>
    
    <div style={{color:"pink"}} ><h1>{useSelector(({user}) => user.userType)}</h1></div>

    </>)
}
