import axios from "axios";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setUser } from "../services/store/reducers/AuthSlice";

const Login = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const saveForm = async (data) => {
    console.log(data);

    try {
      const apiUrl = `${process.env.REACT_APP_AUTH_API}/login`;

      const response = await axios.post(apiUrl, data);

      if (response.status === 200) {
        const data = await response.data;
        console.log(data);

        localStorage.setItem("token", data.token);

        dispatch(setUser(data.user));

        navigate("/", { state: data.msg });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col xs="12">
            <h1>Login to your account</h1>
          </Col>
          <form name="loginForm" onSubmit={handleSubmit(saveForm)}>
            <Col className="py-3">
              <label>Email</label>
              <input {...register("email")} />
            </Col>
            <Col className="py-3">
              <label>Password</label>
              <input type="password" {...register("password")} />
            </Col>
            <Col className="py-3">
              <input type="submit" value="Login" />
            </Col>
          </form>
        </Row>
      </Container>
    </>
  );
};

export default Login;
