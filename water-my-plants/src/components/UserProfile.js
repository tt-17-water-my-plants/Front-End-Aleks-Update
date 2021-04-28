import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import axiosWithAuth from "../utils/axiosWithAuth";
import Nav from "./Nav";

const initialData = {
  password: "",
  phoneNumber: "",
  user_id: "",
};

function Profile() {
  const [userData, setUserData] = useState(initialData);
  const { push } = useHistory();

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/users/${localStorage.getItem("UserId")}`)
      .then((res) => {
        console.log(res);
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleUpdate = (evt) => {
    push("/editprofile");
  };

  return (
    <>
      <Nav />
      <div>
        <h2>Profile</h2>
        <p>Username: {userData.username}</p>
        <p>Phone Number: {userData.phone_number}</p>
        <button onClick={handleUpdate}>Update Profile</button>
      </div>
    </>
  );
}

export default Profile;
