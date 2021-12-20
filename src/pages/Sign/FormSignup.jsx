import React, { useState } from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
import { Link } from 'react-router-dom';
import { signupFunc } from '../../controller/firebase/authen';

const FormSignup = ({ submitForm }) => {
  const [imgUpload, setImg] = useState(null)
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate,
    signupFunc,
    imgUpload
  );
  const handleChangeimg = (e) => {
    if (e.target.files[0]) {
      setImg(e.target.files[0]);
    }
  }

  return (
    <div className='form-content-right__khai'>
      <form onSubmit={handleSubmit} className='form__khai' noValidate>
        <h1>
          Chào mừng đến với thế giới âm nhạc của chúng tôi! Hãy tạo tài khoản để có những trải nghiệm tốt nhất.
        </h1>
        <div className='form-inputs__khai'>
          <label className='form-label__khai'>Username</label>
          <input
            className='form-input__khai'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs__khai'>
          <label className='form-label__khai'>Email</label>
          <input
            className='form-input__khai'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs__khai'>
          <label className='form-label__khai'>Password</label>
          <input
            className='form-input__khai'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs__khai'>
          <label className='form-label__khai'>Confirm Password</label>
          <input
            className='form-input__khai'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <div className='form-inputs__khai'>
          <label className='form-label__khai'>Avatar</label>
          <input
            className='form-input__khai'
            type='file'
            name='flie'
            onChange={handleChangeimg}
          />
        </div>
        <button className='form-input-btn__khai' type='submit'>
          Đăng ký
        </button>
        <span className='form-input-login__khai'>
          Bạn đã có tài khoản?
          <Link to='/signin'> Đăng nhập</Link>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;