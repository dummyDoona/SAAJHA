/* eslint-disable react/jsx-pascal-case */
/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Home from './pages/Home';
import CardItemLogin from './components/CardItemLogin';
import NGOs from './pages/NGOs';
import Landing from './pages/Volunteer/Landing';
import ViewRequirement from './pages/Volunteer/ViewRequirement'
import VolunteerRegister from './pages/Volunteer/VolunteerRegister';
import VolunteerLogin from './pages/Volunteer/VolunteerLogin';
import { VolunteerRoute } from './components/PrivateRoute';
import AdminLogin from './pages/Admin/AdminLogin';
import AdminRegister from './pages/Admin/AdminRegister';
import ViewStatus from './pages/Volunteer/ViewStatus';
import FAQs from './pages/FAQs';
import NgoRegistration from './pages/NGOs_form/NgoRegistration';
import NgoUpdate from './pages/NGOs_form/NgoUpdate';
import RegCounsellor from './pages/Counsellor/RegCounsellor';
import LoginCounsellor from './pages/Counsellor/LoginCounsellor';
import RegCase from './pages/CASES/RegCase';
import LoginCase from './pages/CASES/LoginCase';

function App() {
  return (
    <>
    <Router>
      <div className='App'>
          <Routes>
            
          {/* Regular User Routes */}
            <Route path='/' element={<Home />} />
            <Route path='/NGOs' element={<NGOs/>} />
            <Route path='/LoginSignup' element={<CardItemLogin/>} />
            <Route path='/FAQs' element={<FAQs/>} />
          
          
          {/* Volunteer Routes */}
           <Route path='/VolunteerRegister' element={<VolunteerRegister/>} />
           <Route path='/VolunteerLogin' element={<VolunteerLogin/>} />
           
           <Route path='/VolunteerLanding' element={<VolunteerRoute />}>
              <Route path='/VolunteerLanding' element={<Landing/>} /> 
            </Route>
            <Route path='/requirement/:adminId' element={<VolunteerRoute />}>
               <Route path='/requirement/:adminId' element = {<ViewRequirement/>} /> 
            </Route>
            <Route path='/application/:ngoId' element={<VolunteerRoute />}>
               <Route path='/application/:ngoId' element = {<ViewStatus/>} /> 
            </Route>

            {/* Admin Routes */}
            <Route path='/AdminRegister' element={<AdminRegister/>} />
            <Route path='/AdminLogin' element={<AdminLogin/>} />

            {/* NGOs forms */}
            <Route path='/ngoReg' element={<NgoRegistration/>} />
            <Route path='/ngoUpdate' element={<NgoUpdate/>} />

            {/* Counsellor form */}
            <Route path='/RegCounsellor' element={<RegCounsellor/>} />
            <Route path='/LoginCounsellor' element={<LoginCounsellor/>} />

            {/* Case form */}
            <Route path='/RegCase' element={<RegCase/>} />
            <Route path='/LoginCase' element={<LoginCase/>} />
          </Routes>
      </div>
      </Router>
      <ToastContainer/>
    </>
  );
}

export default App;
