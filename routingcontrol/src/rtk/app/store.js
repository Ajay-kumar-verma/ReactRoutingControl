// const {createLogger} =require('redux-logger')
import  {configureStore } from '@reduxjs/toolkit'
import  {userReducer} from  '../features/users/userSlice'
import  {loginReducer} from  '../features/login/loginSlice'

// console.log(reducer)

const store = configureStore({
  reducer:{
     user:userReducer,
     login:loginReducer
  },
// middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(createLogger()), 

})

// console.log("Store is :",store.getState());

export default store ;

