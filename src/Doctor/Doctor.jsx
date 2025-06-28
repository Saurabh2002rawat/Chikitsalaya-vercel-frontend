import React from 'react';
import DoctorNavBar from './DoctorNavBar';
import DoctorSideBar from './DoctorSideBar';
import { Outlet } from 'react-router-dom';  
import './Doctor.css';

const Doctor = () => {
  return (
    <div>
      <DoctorSideBar />
      <section id="content">
        <DoctorNavBar />
        <Outlet /> 
      </section>
    </div>
  );
};

export default Doctor;
