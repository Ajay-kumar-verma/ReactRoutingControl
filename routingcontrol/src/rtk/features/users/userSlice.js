const {createSlice} = require('@reduxjs/toolkit');

const initialState = {
    userType:"user",
}





const {reducer ,actions} = createSlice({
  name:"user",
  initialState,
  reducers:{
    userInfo:(state,action)=>{
    //  console.log(state,action)
       state.userType=action.payload?.userType;
   }
  }
  
})

 
export const userReducer =  reducer ;
export const userActions = actions;