import React from 'react';
import './LoginPage.css';
import img from './loginPage.png';

const LoginPage = () => {
  return (
    <div className="login-container" style={{ backgroundImage: `url(${img})` }}>
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
  );
};

export default LoginPage;
