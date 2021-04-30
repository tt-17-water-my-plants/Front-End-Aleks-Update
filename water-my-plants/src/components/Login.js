import React, { useState } from "react";
import { Form, Container } from "./Styles/LoginStyle";
import Nav from "./Nav";
import { connect } from "react-redux";
import { userLogin } from "../store";

const initialUser = {
  username: "",
  password: "",
};

function Login(props) {
  const [user, setUser] = useState(initialUser);

  const onSubmit = (evt) => {
    evt.preventDefault();
    props.userLogin(user);
  };
  const onChange = (evt) => {
    const { name, value } = evt.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <Nav />
      <Container className="background-img">
        <Form id="login-form" onSubmit={onSubmit}>
          <h2>Sign In</h2>
          <label htmlFor='username' />
            Username:
            <input
              value={user.username}
              onChange={onChange}
              name="username"
              type="text"
              id="username"
            />
          <label htmlFor='password' />
            Password:
            <input
              value={user.password}
              onChange={onChange}
              name="password"
              type="password"
            />
          <button>Sign In</button>
        </Form>
      </Container>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    user_id: state.user_id,
  };
};

export default connect(mapStateToProps, { userLogin })(Login);
