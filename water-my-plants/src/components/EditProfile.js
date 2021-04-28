import React, { useEffect, useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import Nav from "./Nav";

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
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Nav />
      <div>
        <h2>Edit Profile</h2>
        <form onSubmit={onSubmit}>
          <label>
            Phone
            <input
              type="text"
              name="phone_number"
              value={profile.phone_number}
              onChange={onChange}
            />
          </label>
          <label>
            Password Required (Update password as well)
            <input
              type="password"
              name="password"
              value={profile.password}
              onChange={onChange}
            />
          </label>
          <button>Update</button>
        </form>
      </div>
    </>
  );
};

export default EditProfile;
