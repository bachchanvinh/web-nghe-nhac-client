import React from "react";
import validates from './validateInfo-signin';
import useForm from './useForm';
import { signinFunc } from "../../controller/firebase/authen";
import "./Signin.css";
import { Link, useNavigate } from 'react-router-dom';

export default function Signin() {
  const Navigate = useNavigate()
  const submitHandler = (e) => {
    Navigate('/home')
  };
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitHandler,
    validates,
    signinFunc,
  );

  return (
    <div className="form-inner__khai">
      <form onSubmit={handleSubmit} className="form__khai">
        <h2>Đăng nhập</h2>
        <div className="form-group__khai">
          <label htmlFor="email" className="form-label__khai">
            Email
          </label>
          <input
            className="form-input__khai"
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-group__khai">
          <label htmlFor="password" className="form-label__khai">
            Password
          </label>
          <input
            className="form-input__khai"
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button className="form-signin-btn__khai">Đăng nhập</button>
        <span className='form-input-signin__khai'>
          Bạn chưa có tài khoản?
          <Link to='/signup'> Đăng ký ngay</Link>
        </span>
      </form>
    </div>
  );
}
