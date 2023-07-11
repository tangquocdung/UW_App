import React, { useContext } from "react";
import {
  SearchOutlined,
  GlobalOutlined,
  InstagramOutlined,
  BellOutlined,
  MessageOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../Context/DarkModeContext";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

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
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
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
            <Link to={"/"}>
              <img
                src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t1.15752-9/351718032_754475026161859_3385111485720851145_n.jpg?_nc_cat=101&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=Usq2ej6-OzEAX_-s3AV&_nc_ht=scontent.fsgn5-14.fna&oh=03_AdQ-H8CVGU9dyisw7pPkQdfBEFmWS-zsALVHqtnY2CzZVw&oe=64D33875"
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
