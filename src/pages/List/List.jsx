import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import DataTable from "../../components/DataTable/DataTable";
import "./list.scss";

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DataTable />
      </div>
    </div>
  );
};

export default List;
