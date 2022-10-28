const {createSlice} = require('@reduxjs/toolkit');

const initialState = {
    login:false,
  }



const {reducer ,actions} = createSlice({
  name:"login",
  initialState,
  reducers:{
    login:(state,action)=>{
    //  console.log(state,action)
      state.login=action?.payload?.login;
   }
  }
  
})

 
export const loginReducer =  reducer ;
export const loginActions = actions;