import React, { useEffect, useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const initialData = {
  password: "",
  phone_number: "",
  user_id: "",
};

const EditProfile = () => {
  const [profile, setProfile] = useState(initialData);

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/users/${localStorage.getItem("UserId")}`)
      .then((res) => {
        setProfile(res.data);
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
  };
  return (
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
          Password
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
  );
};

export default EditProfile;
