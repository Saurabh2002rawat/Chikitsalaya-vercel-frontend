import React from 'react'

const DoctorNavBar = () => {
  return (
    <div>
      <nav>
            <h1>Home</h1>
            <i className='bx bx-menu'></i>
            <div className="header-right">
                <i className="fas fa-envelope header-icon"></i>
                <i className="fas fa-bell header-icon"></i>
                <i className="fas fa-user-circle header-icon"></i>
            </div>

        </nav>
    </div>
  )
}

export default DoctorNavBar
