import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import axiosWithAuth from "../utils/axiosWithAuth";
import Nav from "./Nav";
import styled from "styled-components";

const ProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: auto;
  height: 30rem;
  margin-top: 2%;
  button {
    width: 15rem;
    margin: auto;
  }
  h2 {
    margin-top: 5rem;
  }
  .user-info {
    border: 1px solid #a6a867;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-content: space-between;
    width: 30rem;
    margin: auto;
    border-radius: 9px;
    padding-top: 4%;
    padding-bottom: 4%;
  }
  @media (max-width: 991px) {
    .user-info {
      border: 1px solid #a6a867;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-content: space-around;
      width: 20rem;
      margin: auto;
      border-radius: 9px;
      padding: 5%;
    }
  }
`;

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
      <ProfileDiv>
        <h2>Profile</h2>
        <div className="user-info">
          <p>
            <b>Username: </b>
            {userData.username}
          </p>
          <p>
            <b>Phone Number:</b> {userData.phone_number}
          </p>
          <button onClick={handleUpdate}>Update Profile</button>
        </div>
      </ProfileDiv>
    </>
  );
}

export default Profile;
