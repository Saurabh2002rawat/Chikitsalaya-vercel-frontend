import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Doctor from './Doctor/Doctor';
import DoctorDashboard from './Doctor/DoctorDashboard';
import DoctorUser from './Doctor/DoctorUser';
import Landing from './LandingPage/Landing';
import DoctorAuth from './User/DoctorAuth/DoctorAuth'

import PatientAuth from './User/PatientAuth/PatientAuth';
import Patient from './Patient/Patient';
import Profile from './Patient/Profile';
import Report from './Patient/Report';
import Appointment from './Patient/Appointment';
import DashBoard from './Patient/DashBoard';


function App() {
  return (
    <Router>
      <Routes>
         <Route path="/doctorAuth" element={ <DoctorAuth /> } />
         <Route path="/patientAuth" element={ <PatientAuth /> } />

        <Route path="/doctor" element={<Doctor />}>            {/* Nested under /doctor */}
          <Route index element={<DoctorDashboard />} />         {/* /Doctor */}
          <Route path="user" element={<DoctorUser />} />        {/* /Doctor/user */}
        </Route>

        <Route path="/patient" element={<Patient />}>
          <Route index element={<DashBoard />} />         
          <Route path="profile" element={<Profile />} />    
          <Route path="report" element={ <Report /> } />    
          <Route path="appointment" element={ <Appointment /> } />
          <Route path="dashboard" element={ <DashBoard /> } />
        </Route>
        
        <Route path="/" element={<Landing />} />   
        <Route path="/landing" element={<Landing />} />   

        {/* <Route path="*" element={<Landing />} />    */}
      </Routes>
    </Router>
  );
}

export default App;
