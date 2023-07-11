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
import { Link } from "react-router-dom";
import { auth } from "../../Firebase/Firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const navigate = useNavigate();

  const register = (value) => {
    createUserWithEmailAndPassword(auth, value.myEmail, value.myPassword)
      .then(() => {
        message.success("Register successful!");
        navigate("/");
      })
      .catch((error) => {
        message.error(error.message);
      });
  };
  return (
    <div className="app__form">
      <Form className="register__form" onFinish={register}>
        <Typography.Title>Register Account !</Typography.Title>
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
        <Link to={"/"}>
          <Divider style={{ borderColor: "black" }}>
            Already have an account?
          </Divider>
        </Link>
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
