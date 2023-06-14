import React, { useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/users/" + userId)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => alert(err.message));
  }, []);

  const handlesubmit = (e) => {
    e.preventDefault();

    axios
      .put("http://localhost:3001/users/" + userId, data)
      .then(() => {
        alert("Update successfull!");
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
          <h1>Update New User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <form onSubmit={handlesubmit}>
              <div className="formInput">
                <label>userName</label>
                <input
                  value={data.userName}
                  onChange={(prev) =>
                    setData({ ...data, userName: prev.target.value })
                  }
                  type="text"
                  placeholder="userName"
                />
              </div>
              <div className="formInput">
                <label>password</label>
                <input
                  value={data.password}
                  onChange={(prev) =>
                    setData({ ...data, password: prev.target.value })
                  }
                  type="password"
                  placeholder="password"
                />
              </div>
              <div className="formInput">
                <label>email</label>
                <input
                  value={data.email}
                  onChange={(prev) =>
                    setData({ ...data, email: prev.target.value })
                  }
                  type="email"
                  placeholder="email"
                />
              </div>
              <div className="formInput">
                <label>firstName</label>
                <input
                  value={data.firstName}
                  onChange={(prev) =>
                    setData({ ...data, firstName: prev.target.value })
                  }
                  type="text"
                  placeholder="firstName"
                />
              </div>
              <div className="formInput">
                <label>surName</label>
                <input
                  value={data.surName}
                  onChange={(prev) =>
                    setData({ ...data, surName: prev.target.value })
                  }
                  type="text"
                  placeholder="surName"
                />
              </div>
              <div className="formInput">
                <label>fullName</label>
                <input
                  value={data.fullName}
                  onChange={(prev) =>
                    setData({ ...data, fullName: prev.target.value })
                  }
                  type="text"
                  placeholder="fullName"
                />
              </div>
              <div className="formInput">
                <label>Address</label>
                <input
                  value={data.address}
                  onChange={(prev) =>
                    setData({ ...data, address: prev.target.value })
                  }
                  type="text"
                  placeholder="address"
                />
              </div>
              <button className="create" type="submit">
                Update
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

export default Update;
