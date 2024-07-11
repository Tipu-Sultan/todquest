import React from 'react';
import './LoginPage.css';
import img from './loginPage.jpg';

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-image">
          <img src={img} alt="Login Illustration" />
        </div>
      </div>
      <div className="login-right">
        <div className="login-box">
          <div className="login-header">
            <h2>ALREADY MEMBERS</h2>
            <a href="/help" className="help-link">Need help?</a>
          </div>
          <form>
            <div className="input-group">
              <input type="text" placeholder="Mahisa Dyan Diptya" />
            </div>
            <div className="input-group">
              <input type="password" placeholder="Enter your password" />
            </div>
            <button type="submit">SIGN IN</button>
          </form>
          <div className="login-footer">
            <p>Don't have an account yet? <a href="/register">Create an account</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
