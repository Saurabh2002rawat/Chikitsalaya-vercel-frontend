import React, { useState } from 'react';
import LoginAuth from '../LoginAuth';
import RegisterAuth from '../RegisterAuth';
import ToggleAuth from '../ToggleAuth';
import axios from 'axios';
import '../StyleAuth.css';
import AuthFooter from '../AuthFooter';

const PatientAuth = () => {
  const [state, setState] = useState(false);
  const toggleState = () => setState((prev) => !prev);

  const handlePatientLogin = async (email, password, navigate) => {
    try {
      const res = await axios.post('http://localhost:3001/patientLogin', { email, password });
      if (res.data.status === 'success') {
         localStorage.setItem('user',JSON.stringify({
            name : res.data.name,
            email: res.data.email
         } )) ;
        navigate('/patient');
      } else {
        alert('Invalid Credentials');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handlePatientRegister = async (name, email, password, navigate) => {
    try {
      const res = await axios.post('http://localhost:3001/patientRegister', { name, email, password });
      alert('Patient registered successfully!');
      // navigate('/patient'); // optional
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bodya">
      <div className={`containera ${state ? 'active' : ''}`}>
        <LoginAuth type="patient" onLogin={handlePatientLogin} />
        <RegisterAuth type="patient" onRegister={handlePatientRegister} />
        <ToggleAuth toggleState={toggleState} />
      </div>
    </div>
  );
};

export default PatientAuth;
