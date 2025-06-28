import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthFooter from './AuthFooter';

const RegisterAuth = ({ type = "patient", onRegister }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    onRegister(name, email, password, navigate);
  };

  return (
    <div className="formBoxa registera">
      <form className="forma" onSubmit={handleSubmit}>
        <h1>{type === "doctor" ? "Doctor Register" : "Register"}</h1>

        <div className="inputBoxa">
          <input type="text" placeholder="Your Name" onChange={(e) => setName(e.target.value)} required />
          <i className="bx bxs-user"></i>
        </div>

        <div className="inputBoxa">
          <input type="email" placeholder="Your Email" onChange={(e) => setEmail(e.target.value)} required />
          <i className="bx bxs-envelope"></i>
        </div>

        <div className="inputBoxa">
          <input type="password" placeholder="Your Password" onChange={(e) => setPassword(e.target.value)} required />
          <i className="bx bxs-lock-alt"></i>
        </div>

        <button type="submit" className="btna">Register</button>
        <AuthFooter />
      </form>
    </div>
  );
};

export default RegisterAuth;
