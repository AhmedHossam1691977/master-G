import React from 'react'

import {  Outlet } from 'react-router-dom'
import Navbar from '../navbar/Navbar.jsx'


export default function Layout({userData ,Logout}) {
  return <>

        <Navbar Logout={Logout} userData={userData}/>
        <Outlet />


  </>
}
