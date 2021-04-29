import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import axiosWithAuth from "../utils/axiosWithAuth";
import { getUserData } from "../store";
import { CardContainer } from './Styles/UserPageStyles';

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
    <CardContainer className="card-container">
      <img src={props.item.image_url} alt="plant pic" />
      <h3>{props.item.nickname}</h3>
      <p>Species: {props.item.species}</p>
      <p>H2OFrequency: {props.item.h2oFrequency}</p>
      <div className='buttons'>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </CardContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

export default connect(mapStateToProps, { getUserData })(PlantCard);
