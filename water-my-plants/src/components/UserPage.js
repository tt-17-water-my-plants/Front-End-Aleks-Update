/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { getUserData } from "../store";
import Nav from "./Nav";
import PlantCard from "./PlantCard";
import { Container } from "./Styles/UserPageStyles";

const UserPage = (props) => {
  useEffect(() => {
    props.getUserData(localStorage.getItem("UserId"));
  }, []);

  return (
    <div>
      {props.isLoading && <h2>Loading...</h2>}
    {!props.isLoading && <>
      <Nav />
      <Container>
        <div className="title-button">
          <h1>My Plants</h1>
          <NavLink className="navLink" to="/newplantform">
            <button>Add a Plant!</button>
          </NavLink>
        </div>
        <div className="cards">
          {props.data.map((item) => (
            <PlantCard item={item} key={item.plant_id} />
          ))}
        </div>
      </Container>
    </>}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
    isLoading:state.isLoading
  };
};

export default connect(mapStateToProps, { getUserData })(UserPage);
