import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../DataTableSource";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const DataTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const onDeleteUser = (id) => {
    axios
      .delete("http://localhost:3001/users/" + id)
      .then((res) => alert("Delete successful!"))
      .catch((err) => console.log(err));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (item) => {
        return (
          <div className="cellAction">
            <Link to={`/users/${item.id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <Link to={"/users"} style={{ textDecoration: "none" }}>
              <div
                className="deleteButton"
                onClick={() => {
                  onDeleteUser(item.id);
                }}
              >
                Delete
              </div>
            </Link>
            <Link
              to={`/users/update/${item.id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="updateButton">Update</div>
            </Link>
          </div>
        );
      },
    },
  ];

  console.log(data);

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Create New User
        <Link
          to="/users/createuser"
          style={{ textDecoration: "none" }}
          className="link"
        >
          Create New
        </Link>
      </div>
      <DataGrid
        rows={data}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 1, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
