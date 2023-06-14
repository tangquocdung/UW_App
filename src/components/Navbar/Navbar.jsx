import React from "react";
import {
  SearchOutlined,
  GlobalOutlined,
  InstagramOutlined,
  BellOutlined,
  MessageOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlined />
        </div>
        <div className="items">
          <div className="item">
            <GlobalOutlined className="icon" />
            English
          </div>
          <div className="item">
            <InstagramOutlined className="icon" />
          </div>
          <div className="item">
            <BellOutlined className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <MessageOutlined className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <UnorderedListOutlined className="icon" />
          </div>
          <div className="item">
            <Link to={"/register"}>
              <img
                src="https://scontent.fsgn6-1.fna.fbcdn.net/v/t1.15752-9/351718032_754475026161859_3385111485720851145_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=AuMgeSOomLMAX-wq_oA&_nc_ht=scontent.fsgn6-1.fna&oh=03_AdSJ-y3t3MN0UafCWGv0xJjnGhaOmlpAG58iVATTINbBhQ&oe=64A7EF35"
                alt=""
                className="avatar"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
