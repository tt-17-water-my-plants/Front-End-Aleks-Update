import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import axiosWithAuth from "../utils/axiosWithAuth";
import { getUserData } from "../store";

import { NavContainer } from "./Styles/CardStyles";

const PlantCard = (props) => {
  const { push } = useHistory();

  const handleDelete = () => {
    axiosWithAuth()
      .delete(`/api/plants/${props.item.plant_id}`)
      .then((res) => {
        console.log(res);
        props.getUserData(JSON.parse(localStorage.getItem("UserId")));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleEdit = () => {
    push(`/plants/${props.item.plant_id}`);
  };
  return (
    <NavContainer>
      <img src={props.item.image_url} alt="plant pic" />
      <h3>{props.item.nickname}</h3>
      <p>Species: {props.item.species}</p>
      <p>H2OFrequency: {props.item.h2oFrequency}</p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleEdit}>Edit</button>
    </NavContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

export default connect(mapStateToProps, { getUserData })(PlantCard);
