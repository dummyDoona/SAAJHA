/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaSignInAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../components/Spinner';
import { Navbar } from '../../components/Navbar';

function RegCase() {
  const [formData, setFormData] = useState({
    name: '',
    DOB: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    guardianName: '',
    guardianPhoneNo: ''
  });

  const { name, DOB, email, password, confirmPassword, gender, guardianName, guardianPhoneNo } = formData;
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
          <FaSignInAlt /> Case Registration
        </h1>
        <p>Register your Case</p>
      </section>
      <section className='form'>
        <form onSubmit={onSubmit}>
          {/* Existing fields */}
          {/* Add new fields for DOB, Email, Password, Confirm Password, Gender, Guardian Name, Guardian Phone No */}
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='name'
              name='name'
              value={name}
              onChange={onChange}
              placeholder='Enter name'
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
          {/* Guardian Name */}
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='guardianName'
              name='guardianName'
              value={guardianName}
              onChange={onChange}
              placeholder='Enter guardian name'
              required
            />
          </div>
          {/* Guardian Phone No */}
          <div className='form-group'>
            <input
              type='number'
              className='form-control'
              id='guardianPhoneNo'
              name='guardianPhoneNo'
              value={guardianPhoneNo}
              onChange={onChange}
              placeholder='Enter guardian phone number'
              maxLength={10}
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

export default RegCase;
