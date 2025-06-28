import React, { useState } from 'react';
import LoginAuth from '../LoginAuth';
import RegisterAuth from '../RegisterAuth';
import ToggleAuth from '../ToggleAuth';
import axios from 'axios';
import '../StyleAuth.css';
import AuthFooter from '../AuthFooter';

const DoctorAuth = () => {
  const [state, setState] = useState(false);
  const toggleState = () => setState((prev) => !prev);

  const handleDoctorLogin = async (email, password, navigate) => {
    try {
      const res = await axios.post('http://localhost:3001/doctorLogin', { email, password });
      if (res.data.status === 'success') {
         localStorage.setItem('doctorUser',JSON.stringify({
            name : res.data.name,
            email: res.data.email
         } )) ;
        navigate('/doctor');
      } else {
        alert('Invalid Credentials');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDoctorRegister = async (name, email, password, navigate) => {
    try {
      const res = await axios.post('http://localhost:3001/doctorRegister', { name, email, password });
      alert('Doctor registered successfully!');
      // navigate('/doctor'); // optional
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bodya">
      <div className={`containera ${state ? 'active' : ''}`}>
        <LoginAuth type="doctor" onLogin={handleDoctorLogin} />
        <RegisterAuth type="doctor" onRegister={handleDoctorRegister} />
        <ToggleAuth toggleState={toggleState} />
      </div>
    </div>
  );
};

export default DoctorAuth;
