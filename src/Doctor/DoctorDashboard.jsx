import React from 'react'

const DoctorDashboard = () => {
  return (
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
  )
}

export default DoctorDashboard
