/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUserData } from "../store";
import PlantCard from "./PlantCard";

const UserPage = (props) => {
  useEffect(() => {
    props.getUserData(JSON.parse(localStorage.getItem("UserId")));
  }, []);

  return (
    <div>
      <h1>My plants</h1>
      {props.data.map((item) => (
        <PlantCard item={item} key={item.plant_id} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

export default connect(mapStateToProps, { getUserData })(UserPage);
