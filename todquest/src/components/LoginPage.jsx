import React from 'react';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <h4>ALREADY MEMBERS</h4>
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
          <p>Don't have an account yet? <br /> <a href="/register">Create an account</a></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
