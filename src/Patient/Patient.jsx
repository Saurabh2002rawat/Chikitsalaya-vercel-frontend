import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import SideBar from './SideBar'
import NavBar from './NavBar'

const Patient = () => {
  return (
    <div>
      <SideBar />
       <section id="content">
        <NavBar />
        <Outlet /> 
      </section>   
    </div>
  )
}

export default Patient
