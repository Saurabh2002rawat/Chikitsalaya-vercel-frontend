import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Report = () => {
  const [appointments, setAppointments] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const fetchPatientRecords = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/patientRecords/${user.email}`);
        setAppointments(res.data);
      } catch (err) {
        console.error('Error fetching patient records:', err);
      }
    };

    if (user?.email) fetchPatientRecords();
  }, [user]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Your Medical Records</h2>

      {appointments.length === 0 ? (
        <p>No records found.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {appointments.map((a) => (
            <div key={a._id} style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '16px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
            }}>
              <p><strong>Date:</strong> {new Date(a.date).toLocaleDateString()}</p>
              <p><strong>Doctor:</strong> {a.doctor}</p>

              <div style={{ marginTop: '10px' }}>
                <p><strong>Prescription:</strong> {a.prescription ? (
                  <a href={a.prescription} target="_blank" rel="noopener noreferrer">View</a>
                ) : (
                  'Not uploaded'
                )}</p>

                <p><strong>Report:</strong> {a.report ? (
                  <a href={a.report} target="_blank" rel="noopener noreferrer">View</a>
                ) : (
                  'Not uploaded'
                )}</p>

                <p><strong>Bill:</strong> {a.bill ? (
                  <a href={a.bill} target="_blank" rel="noopener noreferrer">View</a>
                ) : (
                  'Not uploaded'
                )}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Report;
