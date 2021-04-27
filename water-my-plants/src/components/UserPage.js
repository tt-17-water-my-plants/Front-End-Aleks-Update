import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUserData } from "../store";

const UserPage = (props) => {
  useEffect(() => {
    props.getUserData(JSON.parse(localStorage.getItem("UserId")));
  }, []);

  return (
    <div>
      <h1>My plants</h1>
      {props.data.map((item) => (
        <div key={item.plant_id}>
          <img src={item.image_url} alt="plant pic" />
          <h3>{item.nickname}</h3>
          <p>Species: {item.species}</p>
          <p>H2OFrequency: {item.h20Frequency}</p>
        </div>
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
