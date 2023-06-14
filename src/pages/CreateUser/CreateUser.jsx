import React, { useState } from "react";
import "./createuser.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const CreateUser = () => {
  const [userName, userNamechange] = useState("");
  const [password, passwordchange] = useState("");
  const [email, emailchange] = useState("");
  const [firstName, firstNameChange] = useState("");
  const [surName, surNamechange] = useState("");
  const [fullName, fullNamechange] = useState("");
  const [address, addresschange] = useState("");
  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    const empdata = {
      userName,
      password,
      email,
      firstName,
      surName,
      fullName,
      address,
    };

    axios
      .post("http://localhost:3001/users", empdata)
      .then(() => {
        alert("Create successfull!");
        navigate("/users");
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Create New User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <form onSubmit={handlesubmit}>
              <div className="formInput">
                <label>userName</label>
                <input
                  value={userName}
                  onChange={(e) => userNamechange(e.target.value)}
                  type="text"
                  placeholder="userName"
                />
              </div>
              <div className="formInput">
                <label>password</label>
                <input
                  value={password}
                  onChange={(e) => passwordchange(e.target.value)}
                  type="password"
                  placeholder="password"
                />
              </div>
              <div className="formInput">
                <label>email</label>
                <input
                  value={email}
                  onChange={(e) => emailchange(e.target.value)}
                  type="email"
                  placeholder="email"
                />
              </div>
              <div className="formInput">
                <label>firstName</label>
                <input
                  value={firstName}
                  onChange={(e) => firstNameChange(e.target.value)}
                  type="text"
                  placeholder="firstName"
                />
              </div>
              <div className="formInput">
                <label>surName</label>
                <input
                  value={surName}
                  onChange={(e) => surNamechange(e.target.value)}
                  type="text"
                  placeholder="surName"
                />
              </div>
              <div className="formInput">
                <label>fullName</label>
                <input
                  value={fullName}
                  onChange={(e) => fullNamechange(e.target.value)}
                  type="text"
                  placeholder="fullName"
                />
              </div>
              <div className="formInput">
                <label>Address</label>
                <input
                  value={address}
                  onChange={(e) => addresschange(e.target.value)}
                  type="text"
                  placeholder="address"
                />
              </div>
              <button className="create">
                Create
              </button>
              <Link to="/users" style={{ textDecoration: "none" }}>
                <button className="back">Back</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
