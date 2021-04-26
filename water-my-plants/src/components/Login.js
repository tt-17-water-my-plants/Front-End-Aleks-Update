import React, { useState } from "react";

function Login() {
  const { user, setUser } = useState("");

  const onSubmit = (evt) => {
    evt.preventDefault();
    user();
  };
  const onChange = (evt) => {
    const { name, value } = evt.target;
    setUser(name, value);
  };

  return (
    <form id="login-form" onSubmit={onSubmit}>
      <h2>Sign In</h2>
      <label>
        Username
        <input
          // value={}
          onChange={onChange}
          name="username"
          type="text"
        />
      </label>
      <label>
        Password
        <input
          // value={}
          onChange={onChange}
          name="password"
          type="text"
        />
      </label>
      <button>Sign In</button>
    </form>
  );
}

export default Login;
