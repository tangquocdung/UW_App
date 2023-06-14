import React, { useState, useEffect } from "react";
import "./details.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Charts from "../../components/Charts/Charts";
import List from "../../components/Table/Table";
import axios from "axios";
import { useParams } from "react-router-dom";

const Details = () => {
  const [data, setData] = useState([]);
  const { userId } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:3001/users/" + userId)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="details">
      <Sidebar />
      <div className="detailsContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <div className="single">
                <h1 className="itemTitle">{data.userName}</h1>
                <div className="singleItem">
                  <span className="itemKey">Password:</span>
                  <span className="itemValue">{data.password}</span>
                </div>
                <div className="singleItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{data.email}</span>
                </div>
                <div className="singleItem">
                  <span className="itemKey">firstName:</span>
                  <span className="itemValue">{data.firstName}</span>
                </div>
                <div className="singleItem">
                  <span className="itemKey">surName:</span>
                  <span className="itemValue">{data.surName}</span>
                </div>
                <div className="singleItem">
                  <span className="itemKey">fullName:</span>
                  <span className="itemValue">{data.fullName}</span>
                </div>
                <div className="singleItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">{data.address}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Charts aspect={2 / 1} title="User Spending (Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transaction</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Details;
