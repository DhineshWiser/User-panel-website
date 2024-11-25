"use client";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { SiGnuprivacyguard } from "react-icons/si";
import { useState } from "react";

const Signup = () => {
  const [num, setNum] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [id, setId] = useState("2");
  //   const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hi");
    if (password == repassword) {
      if (email == "" && password == "")
        return alert("invaild eamil or password");
      axios.post("https://670f45153e715186165720fb.mockapi.io/admin", {
        num,
        email,
        password,
      });
      setNum("");
      setEmail("");
      setPassword("");
      setRepassword("");
      //   router.push("/Signin");
    } else {
      alert("Miss Match Password");
    }
  };
  const DeleteData = (id) => {
    axios.delete(`https://670f45153e715186165720fb.mockapi.io/admin/1`);
  };
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100  bg-light text-dark card">
      <SiGnuprivacyguard className="fs-3"/>
      <h1 className="fw-bold fs-2" data-aos="fade-up">Sign Up</h1>
      <form className="w-25" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Number
          </label>
          <input
            type="number"
            className="form-control"
            id="name"
            placeholder="Enter Number"
            value={num}
            onChange={(e) => setNum(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter Eamil"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Conform Password
          </label>
          <input
            type="password"
            placeholder="Confirm Password"
            className="form-control"
            id="repassword"
            value={repassword}
            onChange={(e) => setRepassword(e.target.value)}
          />
        </div>
        <div className="d-flex justify-content-between my-4">
          <button type="submit" className="btn btn-warning text-white  fw-bold px-3">
            Sign up
          </button>
          <button
            onClick={DeleteData}
            type="submit"
            className="btn btn-danger  fw-bold px-3"
          >
            Delete
          </button>
        </div>

      </form>
    </div>
  );
};
export default Signup;