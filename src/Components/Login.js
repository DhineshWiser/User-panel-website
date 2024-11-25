
"use client";
import "bootstrap/dist/css/bootstrap.min.css";
// import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Login = () => {
  const [apiData, setApiData] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
//   const router = useRouter();
  useEffect(() => {
    axios
      .get("https://670f45153e715186165720fb.mockapi.io/admin")
      .then((response) => {
        setApiData(response.data);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("email: ", email);
    console.log("password: ", password);

    if (email) {
      if (password) {
        let EmailData = apiData.filter((items) => items.email == email);
        console.log("db true");
        if (EmailData.length == 0) {
          alert("can't see your email, pls register first");
        //   router.push("Signup");
        } else {
          if (password == EmailData[0]?.password) {
            alert("login successfully");
            // router.push("Products");
          } else {
            alert("please enter correct password");
          }
        }
      } else {
        alert("please fill the password");
      }
    } else {
      alert("please fill the email");
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light  text-dark card">
      <FaUserCircle  className="fs-2"/>
      <h1 className="fw-bold  py-2" data-aos="fade-up">Log in</h1>
      <form className="w-25 " onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
          />
        </div>
        <div className="d-flex justify-content-between mt-4">
        <Link to={"/signup"}>
          <button type="submit" className="btn btn-primary fw-bold">
            signup
          </button>
          </Link>
          <Link to={"/"}>
          <button type="submit" className="btn btn-danger fw-bold">
            submit
          </button>
          </Link>
          <Link href={"Updatepassword"} className="btn btn-primary fw-bold px-1">
            Forget Password
          </Link>
        </div>
      </form>
    </div>
  );
};
export default Login;
