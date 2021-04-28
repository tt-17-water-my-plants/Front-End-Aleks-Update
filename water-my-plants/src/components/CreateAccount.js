import React, { useState } from "react";
import { useHistory } from "react-router";
import axiosWithAuth from "../utils/axiosWithAuth";
import Nav from "./Nav";

const initialFormValues = {
  username: "",
  phone_number: "",
  password: "",
};

export default function CreateAccount() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const { push } = useHistory();

  const onChange = (evt) => {
    const { name, value } = evt.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    const newUser = {
      username: formValues.username.trim(),
      phone_number: formValues.phone_number.trim(),
      password: formValues.password.trim(),
    };
    axiosWithAuth()
      .post("/api/users/register", newUser)
      .then((res) => {
        console.log(res);
        setFormValues(initialFormValues);
        push("/login");
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  return (
    <>
      <Nav />
      <div>
        {/* Icon? */}
        <h2>Sign Up</h2>
        <form onSubmit={onSubmit}>
          <label>
            Username
            <input
              type="text"
              name="username"
              value={formValues.username}
              onChange={onChange}
            />
          </label>
          <label>
            Phone
            <input
              type="text"
              name="phone_number"
              value={formValues.phone_number}
              onChange={onChange}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              value={formValues.password}
              onChange={onChange}
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}
