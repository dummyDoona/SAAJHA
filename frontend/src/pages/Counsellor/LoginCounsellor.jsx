/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaSignInAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../components/Spinner';
import { Navbar } from '../../components/Navbar';

function LoginCounsellor() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    secretKey: ''
  });

  const { email, password, secretKey } = formData;
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
    // Your validation and submission logic
    navigate('/');
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Navbar />
      <section className='heading'>
        <h1>
          <FaSignInAlt /> Counsellor Login
        </h1>
        <p> Please Login</p>
      </section>
      <section className='form'>
        <form onSubmit={onSubmit}>
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
          {/* Secret Key */}
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='secretKey'
              name='secretKey'
              value={secretKey}
              onChange={onChange}
              placeholder='Enter secret key'
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

export default LoginCounsellor;
