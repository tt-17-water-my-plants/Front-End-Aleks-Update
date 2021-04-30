import React, { useEffect, useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import Nav from "./Nav";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  form {
    flex-direction: column;
  }
`;

const initialData = {
  password: "",
  phone_number: "",
  user_id: "",
  username: "",
};

const EditProfile = () => {
  const [profile, setProfile] = useState(initialData);

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/users/${localStorage.getItem("UserId")}`)
      .then((res) => {
        console.log(res.data);
        setProfile({ ...res.data, password: "" });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/api/users/${localStorage.getItem("UserId")}/update`, profile)
      .then((res) => {
        alert("User's information updated!")
        console.log(res);
      })
      .catch((err) => {
        alert("Something went wrong!")
        console.log(err)});
  };
  return (
    <>
      <Nav />
      <Container>
        <h2>Edit Profile</h2>
        <form onSubmit={onSubmit}>
          <br />
          <label>
            Phone Number
            <br />
            <input
              type="text"
              name="phone_number"
              value={profile.phone_number}
              onChange={onChange}
            />
            <br />
          </label>
          <br />
          <label>
            Password Required(Enter the password to confirm an action)
            <br />
            <input
              type="password"
              name="password"
              value={profile.password}
              onChange={onChange}
            />
          </label>
          <br />
          <button>Update</button>
          <Link to="/profile">
            <button>Cancel</button>
          </Link>
        </form>
      </Container>
    </>
  );
};

export default EditProfile;
