import {NavLink} from "react-router-dom"

const style = (e) =>{
    const {isActive} =e;
    if(isActive)
    return {margin:"5px",color:"red" }
   else return { margin:"2px",}
  }
  
  const Links =(children) =>{
      return (<>
    <NavLink 
    style={style}
    to={children}>{children}</NavLink>
  </>)
  }


function navLists(list) {
 console.log("Navlink component is loaded ")
    return list.map(e =>Links(e))
    
}
  
export {navLists};

