import React from "react";
import { Form, Input, Typography, Button, Divider, message } from "antd";
import {
  GoogleOutlined,
  FacebookOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import "./images/img3.jpg";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/Firebase.config";
import "./forgotpassword.scss";
import { sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const resetPassword = (e) => {
    sendPasswordResetEmail(auth, e.myEmail)
      .then(() => {
        // Password reset email sent!
        console.log("test reset password sent");
        alert("Send email!");
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="app__form">
      <Form className="forgot__form" onFinish={resetPassword}>
        <Typography.Title>Forgot Password!</Typography.Title>
        <Form.Item
          rules={[
            {
              required: true,
              type: "email",
              message: "Please enter valid email",
            },
          ]}
          label="Email"
          name={"myEmail"}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>

        <Button type="primary" htmlType="submit" block>
          Submit
        </Button>
        <Link to={"/"}>
          <Divider style={{ borderColor: "black" }}>Back to Login</Divider>
        </Link>
        <div className="social__login">
          <GoogleOutlined className="social__icon" style={{ color: "red" }} />
          <FacebookOutlined
            className="social__icon"
            style={{ color: "blue" }}
          />
          <TwitterOutlined className="social__icon" style={{ color: "cyan" }} />
        </div>
      </Form>
    </div>
  );
};
export default ForgotPassword;
