import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthFooter from './AuthFooter';

const LoginAuth = ({ type = "patient", onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    onLogin(email, password, navigate);
  };

  return (
    <div className="formBoxa logina">
      <form className="forma" onSubmit={handleLogin}>
        <h1>{type === "doctor" ? "Doctor Login" : "Login"}</h1>

        <div className="inputBoxa">
          <input type="email" placeholder="Your Email" onChange={(e) => setEmail(e.target.value)} required />
          <i className="bx bxs-user"></i>
        </div>

        <div className="inputBoxa">
          <input type="password" placeholder="Your Password" onChange={(e) => setPassword(e.target.value)} required />
          <i className="bx bxs-lock-alt"></i>
        </div>

        <button type="submit" className="btna">Login</button>
        <AuthFooter />
      </form>

    </div>
  );
};

export default LoginAuth;
