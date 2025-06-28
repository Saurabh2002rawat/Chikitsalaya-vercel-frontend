import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div>
       <section id="sidebar">
        <a href="#" className="brand">
            <i className='bx bx-pulse'></i>
            <span className="text">NITW D.</span>
        </a>
        <ul className="side-menu top">
            <li >
               <Link to='/patient/dashboard' >
                    <i className='bx bxs-home'></i>
                    <span className="text">Home</span>
                </Link>
            </li>
            <li>
                <Link to='/patient/appointment' >
                    <i className='bx bx-calendar-event'></i>
                    <span className="text">Appointment</span>
                </Link>
            </li>
            <li>
                <Link to='/patient/report' >
                    <i className='bx bxs-chat'></i>
                    <span className="text">Reports</span>
                </Link>
            </li>
            <li className="active">
                <Link to='/patient/profile' >
                    <i className='bx bxs-user-circle'></i>
                    <span className="text" >Profile</span>
                </Link>
            </li>
        </ul>
        <ul className="side-menu" >
              <li>
                <Link to='/landing' className="logout" >
                    <i className='bx bxs-log-out-circle'></i>
                    <span className="text">Logout</span>
                </Link>

            </li>
        </ul>
    </section>
    </div>
  )
}

export default SideBar
