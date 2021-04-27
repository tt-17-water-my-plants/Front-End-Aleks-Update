import React, { useState } from "react";


const initialUser = {
  username: '',
  password: '',
}




function Login() {
  const { user, setUser } = useState(initialUser);

  const onSubmit = (evt) => {
    evt.preventDefault();
    user();
  };
  const onChange = (evt) => {
    const { name, value } = evt.target;
    setUser(...user,[name]: value);
  };

  return (
    <form id="login-form" onSubmit={onSubmit}>
      <h2>Sign In</h2>
      <label>
        Username
        <input
          value={user.username}
          onChange={onChange}
          name="username"
          type="text"
        />
      </label>
      <label>
        Password
        <input
          value={user.password}
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
