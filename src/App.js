import React, { useEffect, useState } from 'react'
import {Navigate, RouterProvider, createBrowserRouter} from 'react-router-dom'
import Layout from './component/layout/Layout.jsx'
import { jwtDecode } from 'jwt-decode'

import SignIn from './component/signIn/SignIn.jsx'
import SignUp from './component/signUp/SignUp.jsx'


import Form from './component/form/Form.jsx'
import ProtectedRouter from './protectedData.jsx'
import Success from './component/success/Success.jsx'
import Users from './component/users/Users.jsx'
import UserDetels from './component/UserDetels.jsx'



export default function App() {

  let [token,setToken] = useState(null)  


  useEffect(()=>{
    if (localStorage.getItem('token')){
      let token = localStorage.getItem("token")
      let userData = jwtDecode(token)
      saveUserData(userData)
      setToken(userData)


    }
  },[])

// log out
  function Logout(){
    saveUserData(null)
    localStorage.removeItem("token")
    return  <Navigate to='/login'/>
  }


  let [userData,setUserData] = useState(null)  



  function saveUserData(data){
    setUserData(data)

  }


  

  let Routes = createBrowserRouter([
    {path:'',element:<Layout  Logout={Logout} userData={userData}/>,children:[
      {path:'form',element:<ProtectedRouter><Form token={token}/></ProtectedRouter>},
      {path:'success',element:<ProtectedRouter><Success/></ProtectedRouter>},
      {path:'users',element:<ProtectedRouter><Users/></ProtectedRouter>},
      {path:'userDetels/:id',element:<ProtectedRouter><UserDetels/></ProtectedRouter>},

      {path:'signin',element:<SignIn saveUserData={saveUserData} />},
      {path:'signup',element:<SignUp/>},
  ]}
  ])

  return<>



    <RouterProvider router={Routes}/>

  
  </>
}
