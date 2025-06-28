import React, { useState, useEffect } from 'react'
import './Appointment.css'
import FullCalendar from '../components/Calendar/Calendar'
import axios from 'axios'

const Appointment = () => {

   const [appointments, setAppointments] = useState([]);
  const user = JSON.parse(localStorage.getItem('user')); // patient info

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/patientAppointments/${user.email}`);
        setAppointments(res.data);
      } catch (err) {
        console.error('Failed to fetch appointments:', err);
      }
    };

    if (user?.email) fetchAppointments();
  }, [user]);


  return (
    <div>
      <button className="bookAppointment" id="ba">
         <i className='bx bx-plus'></i> Book Appointment
      </button>
      <div className="appointmentLayout">
         <div className="appoints">


                   <div style={{ padding: '20px' }}>
                        <h2>Your Appointments</h2>
                        {appointments.length === 0 ? (
                        <p>No appointments found.</p>
                        ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                           {appointments.map((a) => (
                              <div key={a._id} style={{
                                 border: '1px solid #ddd',
                                 borderRadius: '8px',
                                 padding: '12px',
                                 backgroundColor: '#f9f9f9'
                                 }}>
                              <p><strong>Date:</strong> {new Date(a.date).toLocaleDateString()}</p>
                              <p><strong>Time:</strong> {a.time}</p>
                              <p><strong>Doctor:</strong> {a.doctor}</p>
                              </div>
                           ))}
                        </div>
                        )}
                     </div>



         </div>
         <div className="calendara">
            <FullCalendar />
         </div>
      </div>
      
    </div>
  )
}

export default Appointment
