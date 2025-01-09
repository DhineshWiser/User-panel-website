import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter your email address.");
      return;
    }

    axios
      .post("https://example.com/api/reset-password", { email })
      .then((response) => {
        setMessage("A password reset link has been sent to your email.");
      })
      .catch((error) => {
        setMessage("Error: Unable to send password reset link.");
      });
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-dark">
      <h2 className="fw-bold py-2" data-aos="fade-up">Forgot Password</h2>
      <form className="w-25" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="d-flex justify-content-between mt-4">
          <button type="submit" className="btn btn-primary fw-bold">
            Submit
          </button>
        </div>
      </form>
      {message && <div className="mt-3">{message}</div>}
      <div className="mt-3">
        <Link to={"/login"}>Back to Login</Link>
      </div>
    </div>
  );
};

export default ForgetPassword;
