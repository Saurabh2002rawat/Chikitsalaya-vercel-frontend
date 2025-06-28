import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './DoctorUser.css';

const DoctorUser = () => {
  const [appointments, setAppointments] = useState([]);
  const user = JSON.parse(localStorage.getItem('doctorUser'));

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/appointments/${user.name}`);
        setAppointments(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    if (user?.name) fetchAppointments();
  }, [user]);

  const handleFileUpload = async (e, appointmentId, type) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('type', type);

    try {
      await axios.post(`http://localhost:3001/upload/${appointmentId}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert(`${type} uploaded successfully!`);
      window.location.reload(); // Better: refetch appointments
    } catch (err) {
      console.error(err);
      alert('Upload failed');
    }
  };

  const handleDelete = async (appointmentId) => {
   if (!window.confirm("Are you sure you want to delete this appointment?")) return;

  try {
    await axios.delete(`http://localhost:3001/deleteAppointment/${appointmentId}`);
    alert('Appointment deleted successfully');
    // Re-fetch data after deletion
    setAppointments((prev) => prev.filter((a) => a._id !== appointmentId));
  } catch (err) {
    console.error(err);
    alert('Failed to delete appointment');
  }
};


  return (
    <div className="doctor-user-container">
      <section>

        <div className="appointmentList">
         <ul className="appointmentCard" id="appointmentHeading">
            <li>Name</li>
            <li>Date</li>
            <li>Prescription</li>
            <li>Report</li>
            <li>Bill</li>
            <li>Actions</li>
         </ul>
          {appointments.map((a) => (
            <ul className="appointmentCard" key={a._id}>
              <li>{a.name}</li>
              <li>{new Date(a.date).toLocaleDateString()}</li>

              <li className="file-section">
                     {a.prescription && (
                        <a href={a.prescription} target="_blank" rel="noopener noreferrer">View</a>
                     )}
                     <label htmlFor={`prescription-${a._id}`} className="file-label">Upload</label>
                     <input
                        id={`prescription-${a._id}`}
                        className="inputFile"
                        type="file"
                        onChange={(e) => handleFileUpload(e, a._id, 'prescription')}
                     />
                     </li>

              <li className="file-section">
                {a.report && (
                  <a href={a.report} target="_blank" rel="noopener noreferrer">View</a>
                ) }
                    <label htmlFor={`report-${a._id}`} className="file-label">Upload</label>
                    <input
                      id={`report-${a._id}`}
                      className="inputFile"
                      type="file"
                      onChange={(e) => handleFileUpload(e, a._id, 'report')}
                    />
              </li>

              <li className="file-section">
                {a.bill && (
                  <a href={a.bill} target="_blank" rel="noopener noreferrer">View</a>
                )}
                    <label htmlFor={`bill-${a._id}`} className="file-label">Upload</label>
                    <input
                      id={`bill-${a._id}`}
                      className="inputFile"
                      type="file"
                      onChange={(e) => handleFileUpload(e, a._id, 'bill')}
                    />
              </li>
              <li >
               <i className='bx bx-trash' onClick={() => handleDelete(a._id)}></i> 
              </li>
            </ul>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DoctorUser;
