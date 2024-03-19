/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaSignInAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../components/Spinner';
import { Navbar } from '../../components/Navbar';

function RegCounsellor() {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    imageUrl: '',
    employeeCount: '',
    servicesOffered: '',
    websiteUrl: '',
    phoneNo: '',
    mailId: '',
    DOB: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    certification: '',
    specialization: ''
  });

  const { name, location, imageUrl, employeeCount, servicesOffered, websiteUrl, phoneNo, mailId, DOB, email, password, confirmPassword, gender, certification, specialization } = formData;
  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading } = useSelector((state) => state.volunteers);

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {

      navigate('/');
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Navbar />
      <section className='heading'>
        <h1>
          <FaSignInAlt /> New NGO registration
        </h1>
        <p>Enter your NGO details for following fields</p>
      </section>
      <section className='form'>
        <form onSubmit={onSubmit}>
          {/* Existing fields */}
          {/* Add new fields for DOB, Email, Password, Confirm Password, Gender, Certification, Specialization */}
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='name'
              name='name'
              value={name}
              onChange={onChange}
              placeholder='Enter name of your NGO'
              required
            />
          </div>
          {/* Other fields similar to the above one */}
          {/* DOB */}
          <div className='form-group'>
            <input
              type='date'
              className='form-control'
              id='DOB'
              name='DOB'
              value={DOB}
              onChange={onChange}
              placeholder='Enter your Date of Birth'
              required
            />
          </div>
          {/* Email */}
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={email}
              onChange={onChange}
              placeholder='Enter your email address'
              required
            />
          </div>
          {/* Password */}
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={password}
              onChange={onChange}
              placeholder='Enter password'
              required
            />
          </div>
          {/* Confirm Password */}
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='confirmPassword'
              name='confirmPassword'
              value={confirmPassword}
              onChange={onChange}
              placeholder='Confirm password'
              required
            />
          </div>
          {/* Gender */}
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='gender'
              name='gender'
              value={gender}
              onChange={onChange}
              placeholder='Enter your gender'
              required
            />
          </div>
          {/* Certification */}
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='certification'
              name='certification'
              value={certification}
              onChange={onChange}
              placeholder='Enter your certification'
              required
            />
          </div>
          {/* Specialization */}
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='specialization'
              name='specialization'
              value={specialization}
              onChange={onChange}
              placeholder='Enter your specialization'
              required
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default RegCounsellor;
