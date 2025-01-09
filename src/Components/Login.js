"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [apiData, setApiData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://670f45153e715186165720fb.mockapi.io/admin")
      .then((response) => {
        setApiData(response.data);
      });
  }, []);

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values) => {
    const { email, password } = values;

    let EmailData = apiData.filter((items) => items.email === email);

    if (EmailData.length === 0) {
      toast.error("Can't find your email, please register first.");
      navigate('/signup');
    } else {
      if (password === EmailData[0]?.password) {
        toast.success("Login successful!");
        navigate('/');
      } else {
        toast.error("Incorrect password.");
      }
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-dark">
      <FaUserCircle className="fs-2" />
      <h1 className="fw-bold py-2" data-aos="fade-up">Log in</h1>

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ touched, errors }) => (
          <Form className="w-25">
            <div className="mb-3">
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
              <Field
                type="password"
                className={`form-control ${touched.password && errors.password ? "is-invalid" : ""}`}
                id="password"
                name="password"
                placeholder="Enter Password"
              />
              {touched.password && errors.password && <div className="invalid-feedback">{errors.password}</div>}
            </div>

            <div className="d-flex justify-content-between mt-4">
              <Link to="/signup">
                <button type="button" className="btn btn-primary fw-bold">
                  Sign Up
                </button>
              </Link>
              <button type="submit" className="btn btn-danger fw-bold">
                Submit
              </button>
              <Link to="/forgetpassword" className="btn btn-primary fw-bold px-1">
                Forget Password
              </Link>
            </div>
          </Form>
        )}
      </Formik>

      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
};

export default Login;
