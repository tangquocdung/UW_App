import React from "react";
import { Form, Input, Typography, Button, Divider, message } from "antd";
import {
  GoogleOutlined,
  FacebookOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import "./register.scss";
import "./images/img3.jpg";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const register = () => {
    message.success("Register successful!");
    navigate("/login");
  };
  return (
    <div className="app__form">
      <Form className="register__form" onFinish={register}>
        <Typography.Title>Register Account !</Typography.Title>
        <Form.Item
          rules={[
            {
              required: true,
              type: "name",
              message: "Please enter valid name",
            },
          ]}
          label="Name"
          name={"myName"}
        >
          <Input placeholder="Enter your name" />
        </Form.Item>
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
          Register
        </Button>
        <Divider style={{ borderColor: "black" }}>or Login with</Divider>
        <div className="social__register">
          <GoogleOutlined
            className="social__icon"
            onClick={register}
            style={{ color: "red" }}
          />
          <FacebookOutlined
            className="social__icon"
            onClick={register}
            style={{ color: "blue" }}
          />
          <TwitterOutlined
            className="social__icon"
            onClick={register}
            style={{ color: "cyan" }}
          />
        </div>
      </Form>
    </div>
  );
};
export default Register;
