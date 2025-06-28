import React from 'react'

const SideBar = () => {
  return (
    <div>
      <a href="#" className="brand">
            <i className='bx bx-pulse'></i>
            <span className="text">NITW D.</span>
        </a>
        <ul className="side-menu top">
            <li className="active">
                <a href="./index.html">
                    <i className='bx bxs-home'></i>
                    <span className="text">Home</span>
                </a>
            </li>
            <li>
                <a href="./users.html">
                    <i className='bx bx-user'></i>
                    <span className="text">User</span>
                </a>
            </li>
            
        </ul>
        <ul className="side-menu">
            <li>
                <a href="../Landingpage/index.html" className="logout">
                    <i className='bx bxs-log-out-circle'></i>
                    <span className="text">Logout</span>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default SideBar
