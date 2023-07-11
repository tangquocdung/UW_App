import React from "react";
import { Form, Input, Typography, Button, Divider, message } from "antd";
import {
  GoogleOutlined,
  FacebookOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import "./login.scss";
import "./images/img3.jpg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth } from "../../Firebase/Firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { textDecoration } from "@chakra-ui/react";

const Login = () => {
  const navigate = useNavigate();
  const login = (value) => {
    signInWithEmailAndPassword(auth, value.myEmail, value.myPassword)
      .then(() => {
        message.success("Login successful!");
        navigate("/home");
      })
      .catch((error) => {
        message.error("Wrong Email or Password");
      });
  };
  return (
    <div className="app__form">
      <Form className="login__form" onFinish={login}>
        <Typography.Title>Login Account !</Typography.Title>
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

        <Form.Item
          rules={[
            {
              required: true,
              message: "Enter your password",
            },
          ]}
          label="Password"
          name={"myPassword"}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>
        <Button type="primary" htmlType="submit" block>
          Login
        </Button>
        <Link to={"/register"}>
          <Divider style={{ borderColor: "black" }}>
            Don't have an account?
          </Divider>
        </Link>
        <div className="social__login">
          <GoogleOutlined
            className="social__icon"
            onClick={login}
            style={{ color: "red" }}
          />
          <FacebookOutlined
            className="social__icon"
            onClick={login}
            style={{ color: "blue" }}
          />
          <TwitterOutlined
            className="social__icon"
            onClick={login}
            style={{ color: "cyan" }}
          />
        </div>
        <Link
          to={"/forgotpassword"}
          style={{ textDecoration: "underline", color: "#000" }}
        >
          <Divider>Forgot Password!</Divider>
        </Link>
      </Form>
    </div>
  );
};
export default Login;
