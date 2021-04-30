/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import axiosWithAuth from "../utils/axiosWithAuth";
import Nav from "./Nav";
import { Container } from './Styles/EditPlantStyles'

const initialState = {
  nickname: "",
  species: "",
  h2oFrequency: "",
  image_url: "",
};
const EditPlantForm = (props) => {
  const { id } = useParams();
  const { push } = useHistory();
  const [item, setItem] = useState(initialState);

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/plants/${localStorage.getItem("UserId")}`)
      .then((res) => {
        const editPlant = res.data.find(
          (item) => item.plant_id === JSON.parse(id)
        );
        setItem(editPlant);
      })
      .catch((err) => {
        console.log({ err });
      });
  }, []);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setItem({ ...item, [name]: value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const editedItem = { ...item, user_id: localStorage.getItem("UserId") };

    axiosWithAuth()
      .put(`/api/plants/${JSON.parse(id)}`, editedItem)
      .then((res) => {
        push("/userpage");
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  return (
    <>
      <Nav />
      <Container>
        <form onSubmit={handleSubmit}>
          <label>
            Nickname
            <input
              type="text"
              name="nickname"
              value={item.nickname}
              onChange={handleChange}
            />
          </label>
          <label>
            Species
            <input
              type="text"
              name="species"
              value={item.species}
              onChange={handleChange}
            />
          </label>
          <label>
            H<sub>2</sub>O frequency
            <input
              type="text"
              name="h2oFrequency"
              value={item.h2oFrequency}
              onChange={handleChange}
            />
          </label>
          <label>
            {"Image (optional)"}
            <input
              type="text"
              name="image_url"
              value={item.image_url}
              onChange={handleChange}
            />
          </label>
          <button>Edit</button>
        </form>
      </Container>
    </>
  );
};

export default EditPlantForm;
