"use client";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { SiGnuprivacyguard } from "react-icons/si";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    num: Yup.string().required("Number is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    repassword: Yup.string()
      .oneOf([Yup.ref('password'), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    const { num, email, password } = values;

    axios.post("https://670f45153e715186165720fb.mockapi.io/admin", { num, email, password })
      .then(() => {
        toast.success("Signup successful Welcome!");
        
        resetForm();
        navigate('/login'); 
      })
      .catch((err) => {
        console.error("Error: ", err);
        toast.error("Error during signup. Please try again....");
      });
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-dark">
      <SiGnuprivacyguard className="fs-3" />
      <h1 className="fw-bold fs-2" data-aos="fade-up">Sign Up</h1>

      <Formik
        initialValues={{
          num: "",
          email: "",
          password: "",
          repassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ touched, errors }) => (
          <Form className="w-25">
            <div className="mb-3">
              <label htmlFor="num" className="form-label">Number</label>
              <Field
                type="number"
                className={`form-control ${touched.num && errors.num ? "is-invalid" : ""}`}
                id="num"
                name="num"
                placeholder="Enter Number"
              />
              {touched.num && errors.num && <div className="invalid-feedback">{errors.num}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <Field
                type="email"
                className={`form-control ${touched.email && errors.email ? "is-invalid" : ""}`}
                id="email"
                name="email"
                placeholder="Enter Email"
              />
              {touched.email && errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <Field
                type="password"
                className={`form-control ${touched.password && errors.password ? "is-invalid" : ""}`}
                id="password"
                name="password"
                placeholder="Enter Password"
              />
              {touched.password && errors.password && <div className="invalid-feedback">{errors.password}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="repassword" className="form-label">Confirm Password</label>
              <Field
                type="password"
                className={`form-control ${touched.repassword && errors.repassword ? "is-invalid" : ""}`}
                id="repassword"
                name="repassword"
                placeholder="Confirm Password"
              />
              {touched.repassword && errors.repassword && <div className="invalid-feedback">{errors.repassword}</div>}
            </div>

            <div className="d-flex justify-content-between my-4">
              <button type="submit" className="btn btn-success fw-bold">Sign Up</button>
              <Link to="/login">
                <button type="button" className="btn btn-primary fw-bold">Log In</button>
              </Link>
            </div>
          </Form>
        )}
      </Formik>

      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
};

export default Signup;
