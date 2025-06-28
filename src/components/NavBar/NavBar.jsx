import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <div>
      <section id="content">
        <nav>
            <h1>Home</h1>
            <i className='bx bx-menu'></i>
            <div className="header-right">
                <i className="fas fa-envelope header-icon"></i>
                <i className="fas fa-bell header-icon"></i>
                <i className="fas fa-user-circle header-icon"></i>
            </div>

        </nav>

        <div className="main-content">
            <section className="stats-grid">
                <div className="stat-card">
                    <div className="stat-title">Total Patients</div>
                    <div className="stat-value">1,248</div>
                </div>
                <div className="stat-card">
                    <div className="stat-title">Today's Appointments</div>
                    <div className="stat-value">28</div>
                </div>
                <div className="stat-card">
                    <div className="stat-title">Completed Appointments</div>
                    <div className="stat-value">12</div>
                </div>
            </section>

            <section className="chart-container">
                <canvas id="patientChart"></canvas>
            </section>

            <section className="appointments">
                <h3>Upcoming Appointments</h3>
                <div id="appointmentsList"></div>
            </section>
        </div>


    </section>
    </div>
  )
}

export default NavBar
