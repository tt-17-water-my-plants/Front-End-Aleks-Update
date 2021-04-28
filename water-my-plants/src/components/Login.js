import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useHistory } from "react-router";
import styled from 'styled-components';
import { Form, Container } from './Styles/LoginStyle'

const initialUser = {
  username: "",
  password: "",
};

function Login() {
  const [user, setUser] = useState(initialUser);
  const { push } = useHistory();

  const onSubmit = (evt) => {
    evt.preventDefault();
    axiosWithAuth()
      .post("/api/users/login", user)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("UserId", res.data.user_id);
        push("/userpage");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onChange = (evt) => {
    const { name, value } = evt.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <Container className='background-img'>
    <Form id="login-form" onSubmit={onSubmit}>
      <h2>Sign In</h2>
      <label for='username'/>
        Username
        <input
          value={user.username}
          onChange={onChange}
          name="username"
          type="text"
        />
      <label for ='password'/>
        Password
        <input
          value={user.password}
          onChange={onChange}
          name="password"
          type="text"
        />
      <button>Sign In</button>
    </Form>
    </Container>
  );
}

export default Login;
