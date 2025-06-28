import React from 'react'
import { Link } from 'react-router-dom'

const DoctorSideBar = () => {
  return (
    <div>
      <section id="sidebar">
        <a href="#" className="brand">
            <i className='bx bx-pulse'></i>
            <span className="text">NITW D.</span>
        </a>
        <ul className="side-menu top">
            <li className="active">
                <Link to="/doctor">       {/* homeeeeeee */}
                    <i className='bx bxs-home'></i>
                    <span className="text">Home</span>
                </Link>
            </li>
            <li>
                <Link to="/doctor/user">      {/* userrrrrrr */}
                    <i className='bx bx-user'></i>
                    <span className="text">User</span>
                </Link>
            </li>
            
        </ul>
        <ul className="side-menu">
            <li>
                <Link to='/landing' className="logout">
                    <i className='bx bxs-log-out-circle'></i>
                    <span className="text">Logout</span>
                </Link>
            </li>
        </ul>
    </section>
    </div>
  )
}

export default DoctorSideBar
